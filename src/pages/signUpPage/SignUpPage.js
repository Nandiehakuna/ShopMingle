import React from 'react'
import { styled} from 'styled-components'
import Hero from '../../components/hero/Hero'
import SignUpForm from '../../components/form/SignUpForm'


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
const SignUpPage = () => {
  return (
    <Section>
      <Hero page="other">Sign Up Page</Hero>
      <Container>
        <SignUpForm/>
        <Aside></Aside>
      </Container>
      
    </Section>
  )
}

export default SignUpPage