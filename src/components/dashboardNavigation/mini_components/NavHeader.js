import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import NavLogo from './NavLogo';

const Nav = styled.nav`
  position: absolute;
`

const NavHeader = ({isDropdownOpen,handleDropdownToggle}) => {
  return (
    <Nav>
        <MenuIcon onClick={handleDropdownToggle}  className='nav-toggle' style={{ fontSize: "3em",
        position: "absolute",
        top: "0.35em",
        left: "0.4em",
        color : "var(--blue900)",
        cursor: "pointer"}}/>
        <NavLogo/>
        
    </Nav>
  )
}

export default NavHeader