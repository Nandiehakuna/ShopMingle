import React, { useState } from 'react'
import { styled } from 'styled-components'
import Form from './mini_components/Form'
import Button from './mini_components/Button'
import Input from './mini_components/Input'
import { Link } from 'react-router-dom'


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

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.jsc };
  font-size: 0.9em;
  margin-top: ${(props) => props.mrg === "top" && "2em"} ;
`

const LoginForm = () => {
  const [email, setEmail] = useState('')
  
  return (
    <Main>
      <Form>
        <Wrapper>
          <Input type="text" placeholder="Enter email address"/>
          <Input type="password" placeholder="Enter password" link/>
          <Container jsc="end"><Link to="/reset-password" style={{ textDecoration: "none"}}>Forgot password ?</Link></Container>
          <Button size="large">Sign In</Button>
          <Container jsc="start" mrg="top">
            New to ShopMingle ? 
            <Link to="/signup" style={{ marginLeft : "0.8em", textDecoration : "none"}}>Sign Up</Link>
          </Container>
        </Wrapper>
      </Form>
    </Main>
  )
}

export default LoginForm