import React, { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ActivityDrawer from './mini_components/ActivityDrawer';


const Section = styled.section`
  position: relative;
  right: 0;
  top: 0;
`

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 48vh;
  padding: 1.5em 0.2em;
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  background-color: var(--purple100);
  opacity: 0.9;
  color: var(--white-color);
  font-weight: bold;
  cursor: pointer;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--black30);
  opacity: 0.7;
  display: ${(props) => props.display === true ? "block":"none"};
  z-index: 40;
`

const DashboardActivities = () => {
  const [isActivityToggle, setActivityToggle] = useState(false)

  const handleActivityToggle = () => {
    setActivityToggle(!isActivityToggle)
  }

  return (
    <Section>
      <ActivityDrawer handleActivityToggle={handleActivityToggle} isActivityToggle={isActivityToggle} />
      <Modal display={isActivityToggle}/>
      <Container onClick={handleActivityToggle}  isOpen={isActivityToggle}>
        <KeyboardArrowLeftIcon style={{ fontSize: "2.3em",
        cursor: "pointer"}}/>
      </Container>
    </Section>
  )
}

export default DashboardActivities