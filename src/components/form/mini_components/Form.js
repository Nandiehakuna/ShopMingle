import React from 'react'
import { styled } from 'styled-components'

const Container = styled.form`

`

const Form = ({children,onSubmit}) => {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  )
}

export default Form