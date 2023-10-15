import React from 'react'
import Hero from '../../components/hero/Hero'
import styled from 'styled-components'
import Header from '../../components/header/Header'


const Section =  styled.section`
  min-height: 1000px;
`

const IndexPage = () => {
  return (
    <Section>
      <Header/>
      <Hero/>
    </Section>
  )
}

export default IndexPage