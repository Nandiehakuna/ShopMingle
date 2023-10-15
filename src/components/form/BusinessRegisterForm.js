import React from 'react'
import Form from './mini_components/Form'
import {styled} from 'styled-components'
import Input from './mini_components/Input'
import Button from './mini_components/Button'
import Select from './mini_components/Select'



const Main = styled.main`

`

const Container =styled.div`
  text-align: center;
`

const ProgressContainer = styled.div`

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

const BusinessRegisterForm = () => {
  return (
    <Main>
        <Wrapper>
            <ProgressContainer>progress</ProgressContainer>
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
            </Form>
        </Wrapper>
    </Main>
  )
}

export default BusinessRegisterForm