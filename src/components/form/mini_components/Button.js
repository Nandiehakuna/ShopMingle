import React from 'react'
import { styled } from 'styled-components'


const Btn = styled.button`
  background-image: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
  border: 1px solid transparent;
  padding: 0.3em 1.5em;
  font-size: 1.1em;
  text-transform: uppercase;
  margin-top: 1.5em ;
  border-radius: 3.125em;
  line-height: 1.8;
  font-weight: 500;
  color: var(--white-color);
  width: ${(props) => props.size === "large" ? "100%" : "max-content"};
  cursor: pointer;
`

const Button = ({children,size}) => {
  return (
    <Btn size={size}>{children}</Btn>
  )
}

export default Button