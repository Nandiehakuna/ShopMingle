import React from 'react'
import { styled } from 'styled-components'
import Form from './mini_components/Form'
import Button from './mini_components/Button'
import Input from './mini_components/Input'


const Main = styled.main`
  /* margin: ; */
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 1em;
  padding: 4em 0;
  color: var(--black2f);
`

const InnerWrapper= styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
`

const Label = styled.label`
  color: var(--black30);
`

const Message = styled.div`
  position: absolute;
  background-color: var(--success-bg-color);
  width: max-content;
  padding: 0.2em 1em;
  border-radius: 0.5em;
  color: var(--success-color);
  top: -0.5em;
  display: none;
`


const LoginForm = () => {
  return (
    <Main>
      <Form>
        <Wrapper>
          <InnerWrapper>
            <Message>invalid username or password</Message>
            <Label></Label>
            <Input type="text" placeholder="Enter email address"/>
          </InnerWrapper>

          <InnerWrapper>
            <Message>invalid username or password</Message>
            <Label></Label>
            <Input type="password" placeholder="Enter password"/>
          </InnerWrapper>

          <InnerWrapper>
            <Button>Sign In</Button>
          </InnerWrapper>
          
        </Wrapper>
      </Form>
    </Main>
  )
}

export default LoginForm