import React from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Section = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 70vw;
  background: var(--blue50);
  display: ${(props) => props.display === true ? "block":"none"};
  z-index: 41;

  @media (min-width: 45em) {
    width: 50vw;
  }

  @media (min-width: 55em) {
    width: 30vw;
  }
`

const ActivityDrawer = ({isActivityToggle,handleActivityToggle}) => {
  return (
    <Section display={isActivityToggle}>
        <HighlightOffIcon onClick={handleActivityToggle} style={{ position: "absolute",
       top: "0.5em",
       left: "0.5em",
       fontSize: "2.5em",
       cursor: "pointer"}}/>
    </Section>
  )
}

export default ActivityDrawer