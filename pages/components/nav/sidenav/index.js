import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as navItemList from '../navItemList.json';
import NavItem from './navItem';

const negative = (prop) => "-" + prop

const Container = styled.div`
  height: 100vh;
  width: ${props => props.theme.sidenavWidth};
  padding-top: 90px;
  background-color: ${props => props.theme.primaryDark[1]};
  position: relative;
  margin-left: ${props => props.expanded ? 0 : negative(props.theme.sidenavWidth)};
  opacity: ${props => props.expanded ? 1 : 0.5};
  transition: margin-left 0.25s ease-out, opacity 0.25s ease-out;
`

const Sidenav = ({ expanded, user }) => (
  <Container expanded={expanded}>
    {navItemList.map((item, index) => (
      <NavItem key={index} {...item} />
    ))}
  </Container>
)

Sidenav.propTypes = {
  expanded: PropTypes.bool.isRequired,
}

function mapReduxStateToProps(state) {
  return {
    user: state.userReducer.user,
  }
}

export default connect(mapReduxStateToProps)(Sidenav);
