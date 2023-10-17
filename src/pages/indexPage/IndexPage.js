import React,{useEffect} from 'react'
import Hero from '../../components/hero/Hero'
import styled from 'styled-components'
import Header from '../../components/header/Header'


const Section =  styled.section`
  min-height: 1000px;
`

const IndexPage = () => {
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/users/create-user/`)
    .then(res => { 
      res.json().then(data => {
        console.log(data)
      })
    })
  }, [])

  return (
    <Section>
      <Header/>
      <Hero/>
    </Section>
  )
}

export default IndexPage