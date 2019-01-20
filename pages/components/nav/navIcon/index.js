import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as iconData from './iconData'

const Icon = styled.svg`
  ${props => props.styles}
  fill: ${props => props.theme.primaryLight[1]};
  margin-right: 20px;
  overflow: visible;
`

const NavIcon = ({ name, className }) => {
  const { height, width, viewBox, paths, transform } = iconData.default[name]
  return (
    <Icon width={width} height={height} className={className} viewBox={viewBox}>
      {paths && paths.map((path, index) =>
        <path key={index} transform={transform} d={path}></path>
      )}
    </Icon>
  )
}

NavIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default NavIcon