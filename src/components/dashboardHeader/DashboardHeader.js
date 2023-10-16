import React from 'react'
import styled from 'styled-components'
import imgUrl from '../../assets/img/user.png'

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`

const Avatar = styled.img`
  position: absolute;
  top: 1.2em;
  right: 1.3em;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70vw;
  background-color: var(--blue50);
  
`

const Exatra = styled.div`
  position: absolute;
  top: 1.5em;
  font-weight: normal;
  font-size: 1.2em;
  display: none;

  @media (min-width: 45em) {
    display: block;
  }
`
const DashboardHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Exatra>
          Hello, Abuu Yasar
        </Exatra>
        <Avatar src={imgUrl}/>
      </Wrapper>
    </Container>
  )
}

export default DashboardHeader