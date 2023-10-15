import React, { useState } from 'react'
import {styled} from 'styled-components'
import Form from './mini_components/Form'
import Input from './mini_components/Input'
import Button from './mini_components/Button'
import { Link } from 'react-router-dom'


const Main = styled.main`
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

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signup = (event) => {
    event.preventDefault();
    
    if(password !== confirmPassword){
      alert("password do not match")
    }else{
      alert("sign up successfully")
    }
  }

  const handleUsernameOnChange = (e) =>{
    setUsername(e.target.value)
  }

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordOnChange = (e) =>{
    setPassword(e.target.value)
  } 

  const handleConfirmPasswordOnChange = (e) =>{
    setConfirmPassword(e.target.value)
  }


  return (
    <Main>
        <Form onSubmit={signup}>
            <Wrapper>
                <Input type="text" value={username} onChange={handleUsernameOnChange} required={true} placeholder="Enter username"/>
                <Input type="email" value={email} onChange={handleEmailOnChange} required={true} placeholder="Enter email address"/>
                <Input type="password" value={password} onChange={handlePasswordOnChange} required={true} placeholder="Enter password"/>
                <Input type="password" value={confirmPassword} onChange={handleConfirmPasswordOnChange} required={true} placeholder="Confirm password"/>
                <Button size="large">Sign Up</Button>
                <Container mrg="top">
                    Already have account ? 
                    <Link to="/login" style={{ textDecoration: "none", marginLeft: "0.8em"}}>Sign In</Link>
                </Container>
            </Wrapper>
        </Form>
    </Main>
  )
}

export default SignUpForm