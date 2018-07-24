import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from 'antd/lib/breadcrumb';
import Link from 'next/link';
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
  getLabelFromLink = (link) => {
    link = '/' + link
    let subItemVal = ''
    const itemVal = itemList.find(item => {
      if (item.link !== link && item.subItems) {
        subItemVal = item.subItems.find(subItem => subItem.link === link)
      }
      return item.link === link
    })
    return subItemVal ? subItemVal.label : itemVal.label
  }
  render() {
    const splitPath = this.props.path.split('/').filter(p => p !== '')
    const { expanded } = this.state
    console.log(splitPath.slice(0, 2).join('/'))
    return (
      <React.Fragment>
        <div className={css.navBar}>
          <div className={css.navMenuContainer}>
            <MenuIcon onClick={this.onMenuClicked} expanded={expanded} />
            <NavIcon name="onken-logo" className={expanded ? css.logo : css.logoDark} />
          </div>
          <Breadcrumb className={css.breadcrumb}>
            {splitPath.map((link, index) => (
              <Breadcrumb.Item key={index}>
                <Link href={'/' + splitPath.slice(0, index + 1).join('/')}>
                  <a>{this.getLabelFromLink(link)}</a>
                </Link>
              </Breadcrumb.Item>
            ))}
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Admin Tools</a></Breadcrumb.Item>
            <Breadcrumb.Item>User management</Breadcrumb.Item> */}
          </Breadcrumb>
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
