import { Recipient } from "../../models";

describe("Recipient Model", () => {
  it("Constructor", () => {
    const recipient = new Recipient("test@mail.com", "John");
    expect(recipient.email).toBe("test@mail.com");
    expect(recipient.name).toBe("John");
  });
});
