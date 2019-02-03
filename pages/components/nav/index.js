import React from 'react'
import PropTypes from 'prop-types'
import Sidenav from './sidenav'
import Header from './header'

const navItems = [
  {
    link: '/',
    label: 'Profile',
    icon: 'profile'
  },
  {
    link: '/',
    label: 'Teams',
    icon: 'teams'
  },
  {
    link: '/admin',
    label: 'Admin Tools',
    icon: 'admin-tools',
    subItemLinksOnly: true,
    subItems: [
      {
        link: '/user-management',
        label: 'User Management'
      }
    ]
  }
]

const Nav = ({ showNav, onToggleNav }) => (
  <React.Fragment>
    <Header expanded={showNav} onMenuClicked={onToggleNav} />
    <Sidenav expanded={showNav} navItems={navItems} />
  </React.Fragment>
)

Nav.propTypes = {
  showNav: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
}

export default Nav
export { navItems }
