import styled, { css } from 'styled-components'
import NavIcon from '../../navIcon'

export const DropdownIconWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
`

export const StyledNavIcon = styled(NavIcon)`
  ${props => props.active && css`transform: rotate(180deg)`};
  margin-right: 30px;
  overflow: visible;
  transition: 0.25s;
`

export const Content = styled.div`
  font-size: 16px;
  color: ${props => props.theme.primaryLight[1]};
  display: inline-block;
  margin-top: 5px;
  &:after {
    content: "";
    position: relative;
    display: block;
    margin-top: 5px;
    height: 0;
    width: 0;
    transition: width .25s;
  }
`

const subItemStyles = css`
  padding-left: 60px;
  height: 60px;
  ${Content} {
    font-size: 14px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 60px;
    width: 100%;
    border-top: solid 1px ${props => props.theme.primaryDark[2]};
  }
`

export const Button = styled.button`
  ${props => props.theme.buttonBase}
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  width: 100%;
  height: 75px;
  font-weight: 300;
  &:hover {
    background-color: ${props => props.theme.primaryDark[2]};
    ${Content} ::after {
      outline-style: solid;
      outline-color: ${props => props.theme.primary};
      outline-width: thin;
      width: 100%;
    }
    ${StyledNavIcon} {
      fill: ${props => props.theme.primary}
    }
  }
  ${props => props.subItem && subItemStyles}
`