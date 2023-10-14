import React from 'react'
import { styled } from 'styled-components'


const Main = styled.main`
  position: relative;
  height: ${(props) => props.page === "index" ? "805px" : "160px"};
  z-index: 1;
`

const Container = styled.div`
  display: ${(props) => props.page === "index" && "none"};
`

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding-top: ${(props) => props.page === "index" ? "10em" : "7em"};
  padding-left: 5em;
  padding-right: 5em;
  padding-bottom: 2em;
  flex-direction: column;
`

const Cover = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background-color: var(--blue50);
   filter: blur(2);
   z-index: 2;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  color: var(--black30);
`

const Navs = styled.a`
`

const Hero = ({page = "index",children}) => {
  return (
    <Main page={page}>
      <Cover/>
      <Wrapper page={page}>
        <Container page={page}>
          <Content>hero content1</Content>
          <Content>hero content2</Content>
        </Container>

        <Container page={page}>hero social links</Container>
        <Container page={page}>
          <Content>{children}</Content>
          <Navs></Navs>
        </Container>
      </Wrapper>
    </Main>
    
  )
}

export default Hero