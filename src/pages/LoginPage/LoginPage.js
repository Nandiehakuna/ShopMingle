import React from 'react'
import { styled} from 'styled-components'
import Hero from '../../components/hero/Hero'
import LoginForm from '../../components/form/LoginForm'
import Header from '../../components/header/Header'


const Section = styled.section`
  min-height: 1000px;
`

const Container = styled.section`

@media (min-width: 35em) {
  margin: 0 auto;
  width: 500px;
  border: 1px solid var(--black3f);
  border-radius: 1em;
  margin-top: 2em;
}
  
  
`

const Aside = styled.aside`

`

const LoginPage = () => {
  return (
    <Section>
      <Header/>
      <Hero page="other">Login Page</Hero>
      <Container>
        <LoginForm/>
        <Aside></Aside>
      </Container>
    </Section>
  )
}

export default LoginPage