import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'utils/media';
import Hamburger from 'components/Hamburger';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.darkenPrimary}d9;
  box-shadow: 0 4px 4px ${({ theme }) => theme.black}40;
  color: ${({ theme }) => theme.white};
  padding: 20px 12px;

  ${media.small`
      padding: 20px 30px;
  `}
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

  ${media.small`
    background: none;
    color: ${({ theme }) => theme.white};
    font-size: inherit;
    height: auto;
    width: auto;
    position: static;
    display: unset;
    transform: none;
  `}
`;

const StyledHamburger = styled(Hamburger)`
  ${media.small`
      display: none;
  `}
`;

const StyledListItem = styled.li`
  display: inline;
  margin: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledLogo = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  ${media.small`
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 2px;
      background: ${({ theme }) => theme.white};
      position: absolute;
      bottom: -3px;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transition: transform ease-in-out 0.25s;
    }

    &:hover::before {
      transform: scale(1, 1);
    }
  `}
`;

const Navbar = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const NavItems = [
    { to: '/o-mnie', label: 'O mnie' },
    { to: '/#services', label: 'Oferta' },
    { to: '/blog', label: 'Blog' },
    { to: '/kontakt', label: 'Kontakt' },
  ];

  const handleDocumentClick = (e) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(e.target) &&
      isMenuOpen === true
    ) {
      toggleMenuOpen(false);
    }
  };

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    toggleMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [navbarRef, isMenuOpen]);

  return (
    <StyledNav>
      <StyledLogo to="/">SomeCompany</StyledLogo>
      <StyledHamburger isOpen={isMenuOpen} onClick={handleHamburgerClick} />
      <StyledList isOpen={isMenuOpen} ref={navbarRef}>
        {NavItems.map(({ to, label }) => (
          <StyledListItem key={to}>
            {to.includes('#') ? (
              <StyledNavLink as="a" href={to}>
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
