import React from 'react'
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
`

const DashboardActivities = () => {
  return (
    <Section>DashboardActivities
      <ActivityDrawer/>
      <Container>
        <KeyboardArrowLeftIcon  style={{ fontSize: "2.3em"}}/>
      </Container>
    </Section>
  )
}

export default DashboardActivities