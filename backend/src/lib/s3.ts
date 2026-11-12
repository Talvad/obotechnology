import {
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config } from "./config";

export const s3 = new S3Client({});

export const isWebp = (buf: Buffer) =>
  buf.length > 12 &&
  buf.toString("ascii", 0, 4) === "RIFF" &&
  buf.toString("ascii", 8, 12) === "WEBP";

/** `picture` holds our S3 key. A full https URL (e.g. mapped from Google later) is passed through. */
export async function avatarUrl(
  picture: string | undefined,
): Promise<string | null> {
  if (!picture) return null;
  if (picture.startsWith("https://")) return picture;
  if (!picture.startsWith("avatars/")) return null;
  // Short expiry: signed with the function's temporary credentials. /me is fetched on each page.
  return getSignedUrl(
    s3,
    new GetObjectCommand({ Bucket: config.avatarBucket, Key: picture }),
    {
      expiresIn: 900,
    },
  );
}

export async function deleteOwnObject(
  key: string | undefined,
  sub: string,
): Promise<void> {
  // Only ever delete objects under this user's own prefix.
  if (!key || !key.startsWith(`avatars/${sub}/`)) return;
  try {
    await s3.send(
      new DeleteObjectCommand({ Bucket: config.avatarBucket, Key: key }),
    );
  } catch (err) {
    console.error("Failed to delete old avatar", err);
  }
}
