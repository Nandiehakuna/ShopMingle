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

const MessageContainer = styled.div`
     display: flex;
     text-align: center;
     display: block;
     margin-top: 1em;
     display: none;
     padding: 0.8em 1em;
`

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState({
    type: '',
    msg: '',
    to: '',
    show: false
  });


  const signup = async (event) => {
    event.preventDefault();
    
    if(password.length < 8){
      setMessage({
        type: 'error',
        msg: 'Password length must be at least 8 character long',
        to: 'password',
        show:true
      })
      return;
    }

    if (password !== confirmPassword){
      setMessage({
        type: 'error',
        msg: 'Passwords do not match ',
        to: 'password',
        show:true
      })
      return;
    }
  }

  const handleUsernameOnChange = (e) =>{
    setUsername(e.target.value)

    if(message.to === 'username'){
      setMessage({
        type: '',
        msg: '',
        to: '',
        show: false
      })
    }
    
  }

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value)

    if(message.to === 'email'){
      setMessage({
        type: '',
        msg: '',
        to: '',
        show: false
      })
    }
  }

  const handlePasswordOnChange = (e) =>{
    setPassword(e.target.value)
    
    if(message.to === 'password'){
      setMessage({
        type: '',
        msg: '',
        to: '',
        show: false
      })
    }
  } 

  const handleConfirmPasswordOnChange = (e) =>{
    setConfirmPassword(e.target.value)

    if(message.to === 'password'){
      setMessage({
        type: '',
        msg: '',
        to: '',
        show: false
      })
    }
  }

  return (
    <Main>
        <Form onSubmit={signup}>
          <MessageContainer></MessageContainer>
            <Wrapper>
              <Input type="text"  message={message.to === 'username' && message} value={username} onChange={handleUsernameOnChange} required={true} placeholder="Enter username"/>
              <Input type="email" message={message.to === 'email' && message} value={email} onChange={handleEmailOnChange} required={true} placeholder="Enter email address"/>
              <Input type="password" message={message.to === 'password' && message} value={password} onChange={handlePasswordOnChange} required={true} placeholder="Enter password"/>
              <Input type="password" message={message.to === 'password' && message} value={confirmPassword} onChange={handleConfirmPasswordOnChange} required={true} placeholder="Confirm password"/>
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