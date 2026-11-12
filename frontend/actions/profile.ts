'use server';
import { api } from '@/lib/api';
import { FormState } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import sharp from 'sharp';

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const AVATAR_SIZE = 512;

const kb = (bytes: number) => `${Math.max(1, Math.round(bytes / 1024))} KB`;

export async function uploadAvatarAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const file = formData.get('avatar');
  if (!(file instanceof File) || file.size === 0)
    return { error: 'Choose an image to upload' };
  if (file.size > MAX_UPLOAD_BYTES)
    return { error: 'That image is larger than 8MB' };

  let output: Buffer;
  try {
    output = await sharp(Buffer.from(await file.arrayBuffer()))
      .rotate()
      .resize({
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        fit: 'cover',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();
  } catch (error) {
    return { error: 'This file is not a valid image' };
  }
  const res = await api('/me/avatar', {
    method: 'POST',
    body: { image: output.toString('base64') },
  });
  if (!res.ok) return { error: res.message };
  revalidatePath('/', 'layout');
  return {
    message: `Profile picture updated (${kb(file.size)} -> ${kb(output.length)})`,
  };
}

export async function removeAvatarAction(): Promise<FormState> {
  const res = await api('/me/avatar', { method: 'DELETE' });
  if (!res.ok) return { error: res.message };

  revalidatePath('/', 'layout');
  return { message: 'Profile picture removed' };
}
