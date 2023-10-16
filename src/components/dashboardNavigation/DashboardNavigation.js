import React from 'react'
import styled from 'styled-components'
import NavHeader from './mini_components/NavHeader'
import NavDropdown from './mini_components/NavDropdown'



const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`

const DashboardNavigation = () => {
  return (
    <NavContainer>
      <NavHeader/>
      <NavDropdown/>
    </NavContainer>
  )
}

export default DashboardNavigation