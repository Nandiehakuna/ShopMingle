import React from 'react'
import styled from 'styled-components'
import NavHeader from './mini_components/NavHeader'


const NavContainer = styled.nav`
  position: relative;
  top: 0;
  left: 0;

`

const DashboardNavigation = () => {
  return (
    <NavContainer>
      <NavHeader/>
      DashboardNavigation
    </NavContainer>
  )
}

export default DashboardNavigation