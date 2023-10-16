import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import styled from 'styled-components';


const Container = styled.a`

`

const NavLogo = () => {
  return (
    <Container href='/dashboard'>
        <BubbleChartIcon style={{ fontSize : "3em", color : "var(--blue900)"}}/>
        NavLogo
    </Container>
  )
}

export default NavLogo