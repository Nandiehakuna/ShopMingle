import React, { useState } from 'react'
import { styled } from 'styled-components'
import Dropdown from './Dropdown'
import MenuIcon from '@mui/icons-material/Menu';


const Nav = styled.nav`
  position: relative;
  z-index: 20;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--black30);
  opacity: 0.7;
  z-index: 21;
  display: ${(props) => props.display};
`

const Menu = () => {
  const [show,setShow] = useState(false)

  const handleMenu = () =>{
    setShow(!show)
    
  }


  return (
    <Nav>
        <MenuIcon className='menu-toggle' onClick={handleMenu} style={{ position : "absolute",
        top: "0.3em", right: "0.6em", 
        fontSize: "3em",
        color: "var(--blue900)", 
        cursor: "pointer",
        outline: "none",
        zIndex: "22"}}/>
        <Modal display={ show ? "block":"none"} onClick={() => setShow(!show)}/>
        <Dropdown show={show} handleMenu={handleMenu}/>
    </Nav>
  )
}

export default Menu