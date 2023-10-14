import React from 'react'
import { styled} from 'styled-components'
import Hero from '../../components/hero/Hero'


const Section = styled.section`
  min-height: 1000px;
`

const SignUpPage = () => {
  return (
    <Section>
      <Hero page="signup">Sign Up</Hero>
    </Section>
  )
}

export default SignUpPage