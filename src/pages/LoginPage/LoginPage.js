import React from 'react'
import { styled} from 'styled-components'
import Hero from '../../components/hero/Hero'


const Section = styled.section`
  min-height: 1000px;
`


const LoginPage = () => {
  return (
    <Section>
      <Hero page="login">Login Page</Hero>
    </Section>
  )
}

export default LoginPage