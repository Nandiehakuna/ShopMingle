import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import HomeIcon from "@mui/icons-material/Home"

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;

  @media (min-width: 50em) {
    display: flex;
  }
`

const Li = styled.li`
  display: block;

  @media (min-width: 50em) {
    display: inline-flex;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
  cursor: pointer;
  padding: 0.8em 1em;
  color: var(--blue400);
  font-weight: ${(props) => props.type === "login" && "bold"};
  transition: all 0.3s ease-in;

  &:hover{
    background-color: var(--blue100);
  }

  @media (min-width: 50em) {
    padding: 0.5em 0.5em;
    margin-top: 0.4em;
    font-weight: normal;
    margin-left: ${(props) => props.type === "login" && "1.5em"};
    color: var(--black1f);
    font-size: 0.75em;

    &:hover{
      background-color: transparent;
      color: var(--blue400);
    }
  }

  @media (min-width: 62em) {
    margin-left: ${(props) => props.type === "login" && "6em"};
    padding: 0.5em 1.5em;
    text-transform: uppercase;
  }

`;

const Hr = styled.hr`
  border: 2px solid var(--blue100);
  margin-top: 1.5em;
  margin-bottom: 2em;

  @media (min-width: 50em) {
    display: none;
  }
`

const SignUp = styled.div`
  margin-top: 1em;
  padding: 0.8em 2em;
  background-color: var(--blue900);
  width: max-content;
  border-radius: 3em;
  font-weight: bold;
  color: var(--white-color);
  transition: all 0.4s ease-in;

  &:hover{
    background-color: var(--blue100);
    color: var(--blue900);
  }

  @media (min-width: 50em) {
    margin-top: 0.2em;
    padding: 0.5em 1em ;
    font-size: 0.75em;
  }
`

const Navigation = ({show,handleMenu}) => {
  return (
    <UL>
       <Li>
        <Link to="/" onClick={handleMenu} style={{ textDecoration : "none"}}>
          <Item>
            <HomeIcon className='menu-icon'/>
            Home
          </Item>
        </Link>
       </Li>

       <Li>
        <Link to="/" onClick={handleMenu} style={{ textDecoration : "none"}}>
          <Item>
            <HomeIcon className='menu-icon'/>
            Category
          </Item>
        </Link>
       </Li>

       <Li>
        <Link to="/register-business" onClick={handleMenu} style={{ textDecoration : "none"}}>
          <Item>
            <HomeIcon className='menu-icon'/>
            Sale with Us
          </Item>
        </Link>
       </Li>

       <Hr/>

       <Li>
        <Link to="/login" onClick={handleMenu} style={{ textDecoration : "none"}}>
          <Item type="login">
            Log In
          </Item>
        </Link>
       </Li>

       <Li>
        <Link to="/signup" onClick={handleMenu} style={{ textDecoration : "none"}}>
          <SignUp>
            Sign Up
          </SignUp>
        </Link>
       </Li>


    </UL>
  )
}

export default Navigation