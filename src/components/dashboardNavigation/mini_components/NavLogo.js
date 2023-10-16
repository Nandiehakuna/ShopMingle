import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import styled from 'styled-components';


const Container = styled.a`
  text-decoration: none;
  position: relative;
  top: 1em;
  left: 5em;

`
const Text = styled.span`
  position: absolute;
  top: -1em;
  font-weight: bold;
  color: var(--black1f);
`
 
const NavLogo = () => {
  return (
    <Container href='/dashboard'>
        <BubbleChartIcon style={{ fontSize : "3em", color : "var(--blue900)"}}/>
        <Text>ShopMingle.</Text>
    </Container>
  )
}

export default NavLogo