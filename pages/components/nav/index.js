import React, { Component } from 'react';
import Sidenav from './sidenav';
import Header from './header';
import { withTheme } from 'styled-components';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      expanded: true,
    }
  }
  componentDidMount = () => {
    window.addEventListener('resize', () => {
      const { expanded } = this.state
      const mediaQuery = window.matchMedia(`(max-width: ${this.props.theme.sidenavWidth * 3}em)`)
      if (mediaQuery.matches && expanded || !mediaQuery.matches && !expanded)
        this.onMenuClicked()
    })
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

export default withTheme(Nav);
