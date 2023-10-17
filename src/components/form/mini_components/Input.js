import React, { useState } from 'react'
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
  background-color: var(--error-bg-color);
  width: max-content;
  padding: 0.2em 1em;
  border-radius: 0.5em;
  color: var(--error-color);
  top: -0.5em;
  display: ${(props) => props.type === 'error'? 'block':'none'};
`


const Input = ({type,placeholder, value,onChange, required,message}) => {
  
  return (
    <InnerWrapper>
      <Message type={message.type}>{message.msg}</Message>
      <Label></Label>
      <Inpt type={type} required={required} value={value} onChange={onChange} placeholder={placeholder}/>
    </InnerWrapper>
  )
}

export default Input