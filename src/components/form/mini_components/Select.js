import React from 'react'
import {styled} from 'styled-components'

const SelectOpt = styled.select`
  padding: 0.9375em;
  border-radius: 0;
  margin-top: 2em;
  line-height: 1.5;
  color: inherit;
  border: 1px solid var(--black3f);
  background-color: var(--white-color);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1.25em;

  &::selection{
    background-color: var(--blue1f);
  }
`

const Select = () => {
  return (
    <SelectOpt>
        <option>Kiosk</option>
        <option>Food</option>
        <option>Shoes</option>
    </SelectOpt>
  )
}

export default Select