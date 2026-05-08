import { Attachment } from "../../models";

describe("Attachment Model", () => {
  it("Constructor", () => {
    const attachment = new Attachment("some_content_base64", "my_file.png", "inline");
    expect(attachment.content).toBe("some_content_base64");
    expect(attachment.filename).toBe("my_file.png");
    expect(attachment.disposition).toBe("inline");
  });

  it("Constructor with id sets id", () => {
    const attachment = new Attachment("some_content_base64", "my_file.png", "inline", "cid_001");
    expect(attachment.id).toBe("cid_001");
  });

  it("Constructor without disposition defaults to attachment", () => {
    const attachment = new Attachment("some_content_base64", "my_file.png");
    expect(attachment.disposition).toBe("attachment");
  });
});
