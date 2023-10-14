import React from 'react'
import { styled} from 'styled-components'
import Hero from '../../components/hero/Hero'
import LoginForm from '../../components/form/LoginForm'


const Section = styled.section`
  min-height: 1000px;
`


const LoginPage = () => {
  return (
    <Section>
      <Hero page="login">Login Page</Hero>
      <LoginForm/>
    </Section>
  )
}

export default LoginPage