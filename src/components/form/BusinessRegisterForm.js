import React from 'react'
import Form from './mini_components/Form'
import {styled} from 'styled-components'
import Input from './mini_components/Input'
import Button from './mini_components/Button'
import Select from './mini_components/Select'
import ArrowBack from "@mui/icons-material/ArrowBack"
import ArrowForward from "@mui/icons-material/ArrowForward"



const Main = styled.main`

`

const Container =styled.div`
  text-align: center;
`

const ProgressContainer = styled.div`
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 1em;
  padding: 4em 0;
  color: var(--black2f);
`

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
`
const Span = styled.span`
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.5em;
  width: 0.5em;
  border-radius: 50%;
  background-color: var(--success-bg-color);
  color: var(--success-color);
  text-align: center;
`

const Hr = styled.hr`
  border: 1px solid var(--success-bg-color);
  width: 50%;
  height: 0;
  margin: 0;
`

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
  padding: 1em 2em;
`

const BusinessRegisterForm = () => {
  return (
    <Main>
        <Wrapper>
            <ProgressContainer>
                <Span>1</Span>
                <Hr/>
                <Span>2</Span>
                <Hr/>
                <Span>3</Span>
            </ProgressContainer>
            <Form>
                <Container>
                    <Container>1. Business Details</Container>
                    <Input type="text" placeholder="Enter business title"/>
                    <InnerWrapper>
                        <Input type="text" placeholder="Create business category"/>
                        <Select/>
                    </InnerWrapper>
                </Container>

                <Container>
                  <Container>2. Business Location Details</Container>  
                  <InnerWrapper>
                    <Select/>
                    <Input type="text" placeholder="City"/>
                    <Input type="text" placeholder="Street"/>
                  </InnerWrapper>
                    <Input type="email" placeholder="Enter Business email"/>
                </Container>

                <Container>
                   <Container>Owner Details</Container> 
                  <Input type="text" placeholder="Owner username"/>
                  <Input type="text" placeholder="Owner email"/>
                  <Input type="text" placeholder="Enter password"/>
                  <Input type="text" placeholder="Confirm password"/>
                </Container>
                
                <ArrowContainer>
                    <ArrowBack/>
                    <ArrowForward/>
                </ArrowContainer>
            </Form>
        </Wrapper>
    </Main>
  )
}

export default BusinessRegisterForm