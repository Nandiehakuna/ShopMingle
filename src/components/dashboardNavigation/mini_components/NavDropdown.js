import React from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50vw;
  background-color: var(--blue50);
  display: ${(props) => props.display === true ? "block": "none"};
`

const NavDropdown = ({isDropdownOpen,handleDropdownToggle}) => {
  return (
    <Container display={isDropdownOpen}>
        <HighlightOffIcon onClick={handleDropdownToggle} style={{ position: "absolute",
        top: "0.5em",
        right: "1em",
        fontSize: "2.5em",
        cursor: "pointer"}}/>

    </Container>
  )
}

export default NavDropdown