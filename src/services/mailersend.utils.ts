import { createHmac, timingSafeEqual } from "crypto";

export class MailerSendUtils {
  static verifyWebHook(rawBody: Buffer, signature: string, signingSecret: string): boolean {
    if (!signature) {
      throw new Error("No signature provided");
    }

    if (!rawBody) {
      throw new Error("No raw body provided");
    }

    if (!signingSecret) {
      throw new Error("No secret provided");
    }

    const rawData = rawBody.toString("utf8");
    const hmacSignature = createHmac("sha256", signingSecret).update(rawData, "utf8").digest("hex");

    return timingSafeEqual(Buffer.from(signature), Buffer.from(hmacSignature));
  }
}
