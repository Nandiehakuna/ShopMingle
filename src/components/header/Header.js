import React from 'react'
import { styled} from 'styled-components'
import Logo from './mini_components/Logo'
import Menu from './mini_components/Menu'

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
const Wrapper = styled.div`

`

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logo/>
            <Menu/>
        </Wrapper>
    </Container>
  )
}

export default Header