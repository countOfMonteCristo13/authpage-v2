import NavLink from '../../atoms/NavLink/NavLink';
import { StyledNavbar, StyledNavbarLinks } from './StyledNavbar';

const NavbarLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarLinks>
        {NavbarLinks.map(navLink => (
          <NavLink
            key={navLink.title}
            title={navLink.title}
            href={navLink.href}
          />
        ))}
      </StyledNavbarLinks>
    </StyledNavbar>
  );
};

export default Navbar;
