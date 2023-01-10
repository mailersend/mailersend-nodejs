import { Sender } from "../../models";

describe("Sender Model", () => {
  it("Constructor", () => {
    const sender = new Sender("sender@mail.com", "Michel");
    expect(sender.email).toBe("sender@mail.com");
    expect(sender.name).toBe("Michel");
  });
});
