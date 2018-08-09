import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  ${props => props.theme.buttonBase}
  width: 30px;
  margin-top: 5px;
  margin-right: 15px;

&:hover ${Bar}:before {
  width: 100%;
}
`

const Bar = styled.div`
  position: relative;
    border-radius: 2px;
    height: 4px;
    width: ${props => props.width};
    background-color: ${props => props.expanded ? props.theme.primaryLight[1] : props.theme.primaryDark[1]};
    margin-bottom: 4px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 2px;
      width: 0;
      height: 4px;
      background-color: ${props => props.theme.primary};
      transition: width 0.25s;
    }
`

const MenuIcon = ({ onClick, expanded }) => (
  <Button onClick={onClick}>
    <Bar width="30px" expanded={expanded} />
    <Bar width="22px" expanded={expanded} />
    <Bar width="26px" expanded={expanded} />
  </Button>
)

MenuIcon.propTypes = {
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
}

export default MenuIcon
