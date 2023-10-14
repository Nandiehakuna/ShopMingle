import React from 'react'
import { styled } from 'styled-components'

const Container = styled.form`

`

const Form = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Form