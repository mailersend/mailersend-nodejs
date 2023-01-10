import { SMSParams, SMSPersonalization } from "../../models";

describe("SMS Params", () => {
  it("constructor", () => {
    const obj = {
      from: "+19191234567",
      to: ["+19191234567", "+19199876543"],
      text: "Hey {{name}}! This is just a friendly hello :D",
      personalization: [
        {
          phone_number: "+19191234567",
          data: { name: "Dummy" },
        },
        {
          phone_number: "+19199876543",
          data: { name: "Not Dummy" },
        },
      ],
    };
    const params = new SMSParams(obj);
    expect(params).toMatchObject(obj);
  });

  it("setters", () => {
    const personalization: SMSPersonalization[] = [];

    personalization.push(new SMSPersonalization("+19191234567", { name: "Dummy" }));
    personalization.push(new SMSPersonalization("+19199876543", { name: "Not Dummy" }));
    const params = new SMSParams()
      .setFrom("+19191234567")
      .setTo(["+19191234567", "+19199876543"])
      .setText("Hey {{name}}! This is just a friendly hello :D")
      .setPersonalization(personalization);

    expect(params).toMatchObject({
      from: "+19191234567",
      to: ["+19191234567", "+19199876543"],
      text: "Hey {{name}}! This is just a friendly hello :D",
      personalization: [
        {
          phone_number: "+19191234567",
          data: { name: "Dummy" },
        },
        {
          phone_number: "+19199876543",
          data: { name: "Not Dummy" },
        },
      ],
    });
  });
});
