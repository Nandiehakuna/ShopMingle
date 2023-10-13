import React, { useState } from 'react'
import { styled } from 'styled-components'
import Dropdown from './Dropdown'
import MenuIcon from '@mui/icons-material/Menu';


const Nav = styled.nav`
  position: relative;
`

const Menu = () => {
  const [show,setShow] = useState(false)

  const handleMenu = () =>{
    setShow(!show)
  }

  return (
    <Nav>
        <MenuIcon onClick={handleMenu} style={{ position : "absolute",
        top : "0.3em", right : "0.6em", 
        fontSize : "3em",
        color: "var(--blue900)", cursor : "pointer"}}/>
        <Dropdown show={show}/>
    </Nav>
  )
}

export default Menu