'use client';

import { ChangeEvent, useActionState, useState } from 'react';
import { Button } from '../ui/button';
import { Field, FieldDescription, FormError } from '../ui/field';
// import FileInput from '../ui/file-input';
import Input from '../ui/input';
import { removeAvatarAction, uploadAvatarAction } from '@/actions/profile';

const MAX_BYTES = 8 * 1024 * 1024;
type Props = { hasAvatar: boolean };

export default function AvatarForm({ hasAvatar }: Props) {
  const [uploadState, uploadAction, isPending] = useActionState(
    uploadAvatarAction,
    undefined,
  );
  const [removeState, removeAction] = useActionState(
    removeAvatarAction,
    undefined,
  );
  const [preview, setPreview] = useState<string | null>(null);
  const [clientError, setClientError] = useState<string | null>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setClientError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image')) {
      setClientError('Choose an image file');
    } else if (file.size > MAX_BYTES) {
      setClientError('That image is larger than 8 MB');
    } else {
      setPreview(URL.createObjectURL(file));
      return;
    }
    e.target.value = '';
  }
  return (
    <div>
      <form action={uploadAction} className='border-b border-b-gray-300 pb-4 '>
        <FormError state={uploadState} />
        {clientError ? <div>{clientError}</div> : null}
        <Field>
          {/* <FileInput /> */}
          <Input
            id='avatar'
            name='avatar'
            type='file'
            accept='image/*'
            placeholder='Upload your picture'
            required
            onChange={onChange}
          />
          <FieldDescription>
            Large images are resized to 512 x 512 automatically
          </FieldDescription>
        </Field>
        {preview ? <img src={preview} alt='Preview' /> : null}
        <Button type='submit' disabled={isPending}>
          {isPending ? 'Uploading Picture...' : 'Upload Picture'}
        </Button>
      </form>
      {hasAvatar ? (
        <form action={''}>
          <Button type='submit' variant='outline'>
            Remove Picture
          </Button>
        </form>
      ) : null}
    </div>
  );
}
