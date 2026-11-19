set shell := ["bash", "-uc"]

[private]
default:
    @just --list

# Release main: vesnik picks the version (minor if the model gives none) and writes the notes
release:
    @git checkout main
    @git pull --tags -f
    @just _publish-release --default-bump minor
    @just _open "https://github.com/mailersend/mailersend-nodejs/releases"

# Release main as a patch version
hotfix-release:
    @git checkout main
    @git pull --tags -f
    @just _publish-release --bump patch
    @just _open "https://github.com/mailersend/mailersend-nodejs/releases"

# --- Internal helpers ----------------------------------------------------------------

# Tag main and publish the GitHub Release with vesnik from PATH or the Nix dev
# shell; the tag push starts the npm publish workflow. Without vesnik, the
# version is typed by hand. VESNIK_YES=1 skips vesnik's review.
[private]
_publish-release +flags:
    #!/usr/bin/env bash
    set -uo pipefail
    vesnik=""
    if command -v vesnik >/dev/null 2>&1; then
        vesnik="vesnik"
    elif command -v nix >/dev/null 2>&1; then
        vesnik="nix develop --command vesnik"
    fi
    if [ -n "$vesnik" ]; then
        review=""
        if [ "${VESNIK_YES:-}" = 1 ]; then review="--yes"; fi
        $vesnik release {{flags}} $review
        case $? in
            0) exit 0 ;;
            3) echo "Release aborted; nothing was tagged." >&2; exit 1 ;;
            4) echo "The tag is pushed but the GitHub Release failed; run: vesnik renote <tag>" >&2; exit 1 ;;
            *) echo "vesnik failed before tagging; falling back to the manual release." >&2 ;;
        esac
    fi
    echo "> Latest version:"
    git tag -l --sort=-creatordate | head -n 1
    read -r VERSION || exit 1
    # No --generate-notes: it copies PR titles, which carry internal ticket keys.
    gh release create "$VERSION" --target main --notes "" || exit 1
    echo "Add the release notes: vesnik renote $VERSION"

[private]
_open url:
    @if [ "$(uname -s)" = "Darwin" ]; then open "{{url}}"; elif command -v xdg-open >/dev/null 2>&1; then xdg-open "{{url}}"; else echo "{{url}}"; fi
