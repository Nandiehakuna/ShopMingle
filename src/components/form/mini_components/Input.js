import React from 'react'
import { styled } from 'styled-components'


const Inpt = styled.input`
  padding: 0.9375em;
  border-radius: 0;
  margin-top: 2em;
  line-height: 1.5;
  color: inherit;
  border: 1px solid var(--black3f);
  background-color: var(--white-color);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1.25em;

  &::selection{
    background-color: var(--blue1f);
  }
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


const Input = ({type,placeholder}) => {
  return (
    <InnerWrapper>
      <Message>invalid username or password</Message>
      <Label></Label>
      <Inpt type={type} placeholder={placeholder}/>
    </InnerWrapper>
  )
}

export default Input