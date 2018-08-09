import React from 'react'
import PropTypes from 'prop-types'
import Sidenav from './sidenav'
import Header from './header'

const Nav = ({ showNav, onToggleNav }) => (
  <React.Fragment>
    <Header expanded={showNav} onMenuClicked={onToggleNav} />
    <Sidenav expanded={showNav} />
  </React.Fragment>
)

Nav.propTypes = {
  showNav: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
}

export default Nav
