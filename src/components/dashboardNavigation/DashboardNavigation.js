import React,{useState} from 'react'
import styled from 'styled-components'
import NavHeader from './mini_components/NavHeader'
import NavDropdown from './mini_components/NavDropdown'



const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--black30);
  opacity: 0.7;
  display: ${(props) => props.display === true ? "block":"none"};
`

const DashboardNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () =>{
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <NavContainer>
      <NavHeader isDropdownOpen={isDropdownOpen} handleDropdownToggle={handleDropdownToggle}/>
      <Modal display={isDropdownOpen} onClick={handleDropdownToggle}/>
      <NavDropdown isDropdownOpen={isDropdownOpen} handleDropdownToggle={handleDropdownToggle}/>
    </NavContainer>
  )
}

export default DashboardNavigation