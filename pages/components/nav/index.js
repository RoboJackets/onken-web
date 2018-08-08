import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidenav from './sidenav'
import Header from './header'
import { withTheme } from 'styled-components'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      expanded: true,
    }
  }
  componentDidMount = () => {
    const onWindowResize = () => {
      const { expanded } = this.state
      const mediaQuery = window.matchMedia(`(max-width: ${this.props.theme.sidenavWidth * 3}em)`)
      if (mediaQuery.matches && expanded || !mediaQuery.matches && !expanded)
        this.onMenuClicked()
    }
    window.addEventListener('resize', onWindowResize)
    onWindowResize()
  }

  onMenuClicked = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }
  render() {
    const { expanded } = this.state
    return (
      <React.Fragment>
        <Header expanded={expanded} onMenuClicked={this.onMenuClicked} />
        <Sidenav expanded={expanded} />
      </React.Fragment>
    )
  }
}

Nav.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default withTheme(Nav)
