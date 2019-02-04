import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavItem from './navItem'
import { UserConsumer } from '../../providers/userProvider.js'

const negative = (prop) => '-' + prop

const Container = styled.div`
  z-index: 500;
  height: 100vh;
  width: ${props => props.theme.sidenavWidth}em;
  max-width: 90%;
  padding-top: 90px;
  background-color: ${props => props.theme.primaryDark[1]};
  position: relative;
  margin-left: ${props => props.expanded ? 0 : negative(props.theme.sidenavWidth) + 'em'};
  transition: margin-left 0.25s ease-out, opacity 0.25s ease-out;
  opacity: ${props => props.expanded ? 1 : 0.5};

  @media screen and (max-width: ${props => props.theme.sidenavWidth * 3}em) {
    position: absolute;
  }
`

const Sidenav = ({ expanded, navItems }) => (
  <UserConsumer>
    {({ user }) => (
      <Container expanded={expanded}>
        {navItems
          .filter(item => !(item.label === 'Admin Tools' && user.role !== 'Admin'))
          .map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
      </Container>
    )}
  </UserConsumer>
)

Sidenav.propTypes = {
  expanded: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
}

export default Sidenav
