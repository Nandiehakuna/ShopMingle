import React from 'react'
import { styled} from 'styled-components'
import Hero from '../../components/hero/Hero'
import SignUpForm from '../../components/form/SignUpForm'


const Section = styled.section`
  min-height: 1000px;
`

const SignUpPage = () => {
  return (
    <Section>
      <Hero page="other">Sign Up Page</Hero>
      <SignUpForm/>
    </Section>
  )
}

export default SignUpPage