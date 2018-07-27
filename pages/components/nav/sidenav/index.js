import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './styles.less';
import * as navItemList from '../navItemList.json';
import NavItem from './navItem';

const Sidenav = ({ expanded, user }) => (
  <div className={`${css.container} ${expanded && css.expanded}`}>
    {navItemList.map((item, index) => (
      <NavItem key={index} {...item} />
    ))}
  </div>
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
