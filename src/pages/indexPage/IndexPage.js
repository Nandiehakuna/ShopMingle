import React from 'react'
import Hero from '../../components/hero/Hero'
import styled from 'styled-components'

const Section =  styled.section`
  min-height: 1000px;
`

const IndexPage = () => {
  return (
    <Section>
      <Hero/>
    </Section>
  )
}

export default IndexPage