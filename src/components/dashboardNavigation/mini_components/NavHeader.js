import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import NavLogo from './NavLogo';

const Nav = styled.nav`
`

const NavHeader = () => {
  return (
    <Nav>
        <MenuIcon/>
        <NavLogo/>
    </Nav>
  )
}

export default NavHeader