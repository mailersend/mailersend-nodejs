import { createHmac, timingSafeEqual } from "crypto";

export class MailerSendUtils {
  static verifyWebHook(
    rawBody: Buffer,
    signature: string | Headers | Record<string, string | string[] | undefined>,
    signingSecret: string,
  ): boolean {
    const receivedSignature =
      signature && typeof signature !== "string" ? MailerSendUtils.readSignatureHeader(signature) : signature;

    if (!receivedSignature) {
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

    const signatureBuffer = Buffer.from(receivedSignature);
    const hmacBuffer = Buffer.from(hmacSignature);

    if (signatureBuffer.length !== hmacBuffer.length) {
      return false;
    }

    return timingSafeEqual(signatureBuffer, hmacBuffer);
  }

  private static readSignatureHeader(
    headers: Headers | Record<string, string | string[] | undefined>,
  ): string | undefined {
    if (typeof Headers !== "undefined" && headers instanceof Headers) {
      return headers.get("Signature") ?? undefined;
    }

    const record = headers as Record<string, string | string[] | undefined>;
    const headerName = Object.keys(record).find((name) => name.toLowerCase() === "signature");
    const value = headerName ? record[headerName] : undefined;

    return Array.isArray(value) ? value[0] : value;
  }
}
