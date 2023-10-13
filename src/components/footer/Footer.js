import React from 'react'
import {styled} from 'styled-components'


const Container = styled.footer`
  height: 50vh;
  background-color: var(--black30);
  display: flex;
  flex-direction: column;
`

const OuterWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: ${(props) => props.type === "copyright" && "auto"};
   margin-bottom: 2em;
   font-size: ${(props) => props.type === "copyright" && "0.8rem"};
   color: var(--white-color);
`

const InnerWrapper = styled.div`

`

const Footer = () => {
  return (
    <Container>
      <OuterWrapper>
        <InnerWrapper></InnerWrapper>
        <InnerWrapper></InnerWrapper>
        <InnerWrapper></InnerWrapper>
      </OuterWrapper>

      <OuterWrapper type="copyright">
        Copyright &copy; All right reserved.
      </OuterWrapper>

    </Container>
  )
}

export default Footer