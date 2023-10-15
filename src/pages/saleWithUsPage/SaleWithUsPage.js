import React from 'react'
import {styled} from 'styled-components'
import Hero from '../../components/hero/Hero'
import BusinessRegisterForm from '../../components/form/BusinessRegisterForm'


const Section = styled.section`
  min-height: 1000px;
`

const Container = styled.div`
  @media (min-width: 35em) {
    margin: 0 auto;
    width: 500px;
    border: 1px solid var(--black3f);
    border-radius: 1em;
    margin-top: 2em;
  }
`

const SaleWithUsPage = () => {
  return (
    <Section>
        <Hero page='other'>Business Registration Page</Hero>
        <Container>
            <BusinessRegisterForm/>
        </Container>
    </Section>
  )
}

export default SaleWithUsPage