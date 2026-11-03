import { NavItem, type NavItemProp } from './nav-item';

const navItems: NavItemProp[] = [
  { slug: '/services', title: 'Services' },
  { slug: '/products', title: 'Products' },
  { slug: '/careers', title: 'Careers' },
];
function NavBar() {
  return (
    <nav className='hidden xl:flex items-center gap-gutter'>
      {navItems.map((navItem) => (
        <NavItem key={navItem.slug} {...navItem} />
      ))}
    </nav>
  );
}

export { NavBar };
