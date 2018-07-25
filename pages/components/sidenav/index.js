import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './styles.less';
import * as itemList from './itemList';
import NavItem from './navItem';
import NavIcon from './navIcon';
import MenuIcon from './menuIcon';

class Sidenav extends Component {
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
        <div className={css.navBar}>
          <div className={css.navMenuContainer}>
            <MenuIcon onClick={this.onMenuClicked} expanded={expanded} />
            <NavIcon name="onken-logo" className={expanded ? css.logo : css.logoDark} />
          </div>
        </div>
        <div className={`${css.container} ${expanded && css.expanded}`}>
          {itemList.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

function mapReduxStateToProps(state) {
  return {
    user: state.userReducer.user,
  }
}

export default connect(mapReduxStateToProps)(Sidenav);
