import Avatar from '@/components/ui/avatar';
import { Edit } from 'lucide-react';

type Props = {
  url?: string | null;
  name?: string;
};

export default function UserAvatar({ url, name }: Props) {
  return (
    <div className=''>
      <div className='relative inline-block'>
        <Avatar url={url} name={name} size='lg' />
        <div className='absolute top-2 right-2 cursor-pointer bg-primary px-3 py-0.5 rounded-full text-white'>
          <span className='flex items-center gap-1 text-xs'>
            <Edit className='size-3' />
          </span>
        </div>
      </div>
    </div>
  );
}
