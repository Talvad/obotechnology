type NavItemProp = {
  slug: string;
  title: string;
};

const navItems: NavItemProp[] = [
  { slug: '/services', title: 'Services' },
  { slug: '/products', title: 'Products' },
  { slug: '/careers', title: 'Careers' },
];
export { navItems };
export type { NavItemProp };
