'use client';
import { Cross, Menu, X } from 'lucide-react';
import { NavItemProp, navItems } from './nav-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function MobileNavBar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const Icon = showMobileNav ? X : Menu;
  const handleMobileMenu = () => setShowMobileNav(!showMobileNav);
  return (
    <div className='block sm:hidden'>
      <Icon
        className='size-9 border border-gray-300 text-gray-500 p-2 rounded cursor-pointer'
        onClick={handleMobileMenu}
      />
      <nav
        className={`absolute left-4 right-4 top-20 bg-white p-5 shadow flex flex-col gap-4 border-t border-t-gray-100 ${showMobileNav ? 'visible' : 'invisible'}`}
      >
        <NavItems navItems={navItems} handleMenu={handleMobileMenu} />
      </nav>
    </div>
  );
}

export default MobileNavBar;

const NavItems = ({
  navItems,
  handleMenu,
}: {
  navItems: NavItemProp[];
  handleMenu: () => void;
}) => {
  return (
    <>
      {navItems.map((navItem) => (
        <NavItem key={navItem.slug} {...navItem} handleMenu={handleMenu} />
      ))}
    </>
  );
};

const NavItem = ({
  slug,
  title,
  handleMenu,
}: NavItemProp & { handleMenu: () => void }) => {
  const path = usePathname();
  const active = slug === path;
  return (
    <Link
      href={slug}
      className={`block rounded p-2 border font-medium text-gray-700 text-sm transition-colors  ${active ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-gray-50 border-gray-50'}`}
      onClick={handleMenu}
    >
      {title}
    </Link>
  );
};
