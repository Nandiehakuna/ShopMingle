import React from 'react'
import { styled } from 'styled-components'
import Navigation from './Navigation'

const Container = styled.div`
  position: absolute;
  top: 3.4em;
  right: 0;
  left: 50%;
  display: ${(props) => props.show === true ? 'block': 'none'};
  background-color: var(--white-color);
  padding: 1.2em 0 1.2em  0.8em;
`

const Dropdown = ({show}) => {
  return (
    <Container show={show}>
        <Navigation/>
    </Container>
  )
}

export default Dropdown