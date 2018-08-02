import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NavIcon from '../navIcon';
import { MenuIcon, Breadcrumbs } from './components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1000;
`

const NavMenuContainer = styled.div`
  min-width: ${props => props.width};
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledNavIcon = styled(NavIcon)`
  transition: fill 0.25s;
  ${props => !props.expanded && `fill: ${props.theme.primaryDark[1]}`}
`

const Header = ({ onMenuClicked, expanded }) => (
  <Container>
    <NavMenuContainer width="300px">
      <MenuIcon onClick={onMenuClicked} expanded={expanded} />
      <StyledNavIcon name="onken-logo" expanded={expanded} />
    </NavMenuContainer>
    <Breadcrumbs />
  </Container>
)

Header.propTypes = {
  onMenuClicked: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
}

export default Header;
