import { Attachment } from "../../models";

describe("Attachment Model", () => {
  it("Constructor", () => {
    const attachment = new Attachment("some_content_base64", "my_file.png", "inline");
    expect(attachment.content).toBe("some_content_base64");
    expect(attachment.filename).toBe("my_file.png");
    expect(attachment.disposition).toBe("inline");
  });
});
