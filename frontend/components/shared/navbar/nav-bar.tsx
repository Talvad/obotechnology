import { NavItem } from './nav-item';
import { navItems } from './nav-items';

function NavBar() {
  return (
    <nav className='hidden sm:flex items-center gap-gutter'>
      {navItems.map((navItem) => (
        <NavItem key={navItem.slug} {...navItem} />
      ))}
    </nav>
  );
}

export { NavBar };
