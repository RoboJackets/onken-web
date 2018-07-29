import React from 'react';
import PropTypes from 'prop-types';
import * as iconData from './iconData';
import css from './styles.less';

const NavIcon = (props) => {
  const { height, width, viewBox, paths, transform } = iconData[props.name]
  return (
    <svg width={width} height={height}
      className={`${css.icon} ${props.className}`}
      viewBox={viewBox}>
      {paths && paths.map((path, index) =>
        <path key={index} transform={transform} d={path}></path>
      )}
    </svg >
  )
}

NavIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default NavIcon;