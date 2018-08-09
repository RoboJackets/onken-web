import React, { Component } from 'react'
import Sidenav from './sidenav'
import Header from './header'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      expanded: true,
    }
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

export default Nav
