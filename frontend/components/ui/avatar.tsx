import Image from 'next/image';

type Props = {
  url?: string | null;
  name?: string;
  size?: 'sm' | 'lg';
};

export default function Avatar({ url, name, size = 'sm' }: Props) {
  const initials =
    (name || '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('') || '?';
  const classNames = {
    sm: 'h-10 w-10 rounded-full text-lg',
    lg: 'h-40 w-40 rounded-lg text-5xl',
  };
  return url ? (
    <div className={classNames[size]}>
      <Image
        alt={name || ''}
        src={url}
        fill
        className={`object-cover ${classNames[size]}`}
        sizes=''
      />
    </div>
  ) : (
    <span
      className={`${classNames[size]} grid place-items-center bg-primary/10 text-gray-700 font-semibold`}
    >
      {initials}
    </span>
  );
}
