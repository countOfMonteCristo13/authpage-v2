import { FC } from 'react';
import styled from 'styled-components';

type NavLinkProps = {
  title: string;
  href: string;
};

const StyledLink = styled.li`
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLink: FC<NavLinkProps> = ({ title, href }) => {
  return (
    <StyledLink>
      <a href={href}>{title}</a>
    </StyledLink>
  );
};

export default NavLink;
