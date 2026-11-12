'use client';
import AvatarForm from '@/components/forms/avatar-form';
import Avatar from '@/components/ui/avatar';
import { Edit, X } from 'lucide-react';
import { useState } from 'react';

type Props = {
  url?: string | null;
  name?: string;
};

export default function UserAvatar({ url, name }: Props) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className='flex gap-4'>
      <div className='relative inline-block'>
        <Avatar url={url} name={name} size='lg' />
        <div
          className='absolute top-2 right-2 cursor-pointer bg-primary px-3 py-0.5 rounded-full text-white'
          onClick={() => setShowForm((p) => !p)}
        >
          <span className='flex items-center gap-1 text-xs'>
            {showForm ? <X className='size-3' /> : <Edit className='size-3' />}
          </span>
        </div>
      </div>
      {showForm && <AvatarForm hasAvatar={!!url} />}
    </div>
  );
}
