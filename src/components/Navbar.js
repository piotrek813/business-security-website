import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.primary}d9;
  color: ${({ theme }) => theme.white};
  padding: 20px 12px;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  background: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  height: 100vh;
  width: 60vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-60vw')});
`;

const StyledListItem = styled.li`
  display: inline;
  margin: 15px;

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledLogo = styled.span`
  font-size: inherit;
`;

const StyledNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  const NavItems = [
    { to: '/o-mnie', label: 'O mnie' },
    { to: '/#oferta', label: 'Oferta' },
    { to: '/blog', label: 'Blog' },
    { to: '/kontakt', label: 'Kontakt' },
  ];

  const handleHamburgerClick = () => {
    toggleMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNav>
      <StyledLogo>SomeCompnay</StyledLogo>
      <Hamburger isOpen={isMenuOpen} onClick={handleHamburgerClick} />
      <StyledList isOpen={isMenuOpen}>
        {NavItems.map(({ to, label }) => (
          <StyledListItem key={to}>
            {to.includes('#') ? (
              <StyledNavLink as="a" to={to}>
                {label}
              </StyledNavLink>
            ) : (
              <StyledNavLink to={to}>{label}</StyledNavLink>
            )}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
