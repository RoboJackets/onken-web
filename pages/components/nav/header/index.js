import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.less';
import NavIcon from '../navIcon';
import MenuIcon from './menuIcon';
import Breadcrumbs from './breadcrumbs';

const Header = ({ onMenuClicked, expanded }) => (
  <div className={css.container}>
    <div className={css.navMenuContainer}>
      <MenuIcon onClick={onMenuClicked} expanded={expanded} />
      <NavIcon name="onken-logo" className={expanded ? css.logo : css.logoDark} />
    </div>
    <Breadcrumbs />
  </div>
)

Header.propTypes = {
  onMenuClicked: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
}

export default Header;
