import React from 'react'
import { styled } from 'styled-components'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const Container = styled.a`
   position: absolute;
   top: 0.8em;
   left: 0.8em;
   display: flex;
   text-align: start;
   cursor: pointer;
`;

const Text = styled.span`
   font-weight: bold;
   position: absolute;
   top: 1.2em;
   left: 3em;
   color: var(--black1f);

   @media (min-width: 50em) {
     font-size: 0.75em;
     left: 4em;
   }
`;

const Logo = () => {
  return (
    <Container href="/">
        <BubbleChartIcon style={{ fontSize : "3em", color : "var(--blue900)"}}/>
        <Text>ShopMingle.</Text>
    </Container>
  )
}

export default Logo