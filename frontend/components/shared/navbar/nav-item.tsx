'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItemProp } from './nav-items';

function NavItem({ slug, title }: NavItemProp) {
  const path = usePathname();
  const active = slug === path;
  return (
    <Link
      href={slug}
      className={`font-title-md text-body-md text-text-secondary hover:text-text-primary flex items-center gap-space-xs transition-colors py-space-xs px-space-sm rounded border  ${active ? 'bg-orange-50 text-orange-700 border-orange-200' : 'border-white'}`}
    >
      {title}
    </Link>
  );
}

export { NavItem };
export type { NavItemProp };
