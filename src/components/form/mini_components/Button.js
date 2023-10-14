import React from 'react'
import { styled } from 'styled-components'


const Btn = styled.button`
  background-image: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
  border: 1px solid transparent;
  padding: 0.3em 1.5em;
  font-size: 1.2em;
  text-transform: uppercase;
  margin-top: 1.5em ;
  border-radius: 3.125em;
  line-height: 2.265;
  font-weight: 500;
  color: var(--white-color);
  width: max-content;
  cursor: pointer;
`

const Button = ({children}) => {
  return (
    <Btn>{children}</Btn>
  )
}

export default Button