import React, { Component } from 'react';
import Link from 'next/link';
import css from './styles.less';
import NavIcon from '../../navIcon';

export default class NavItem extends Component {
  constructor() {
    super()
    this.state = {
      itemExpanded: false,
    }
  }
  onItemClick = () => {
    if (this.props.subItems) {
      this.setState({
        itemExpanded: !this.state.itemExpanded,
      })
    }
  }
  render() {
    const { link, label, icon, subItems, subItemLinksOnly } = this.props
    const { itemExpanded } = this.state
    return (
      <React.Fragment>
        <Link href={subItemLinksOnly ? '' : link}>
          <button className={css.navItem} onClick={this.onItemClick}>
            <NavIcon name={icon} />
            <div className={css.content}>
              {label}
            </div>
            {subItems && <div className={css.dropdownIconWrapper}>
              <NavIcon name="dropdown-arrow"
                className={itemExpanded ? css.dropdownIconActive : css.dropdownIcon} />
            </div>}
          </button>
        </Link>

        {itemExpanded && subItems.map((subItem, index) => (
          <Link key={index} href={link + subItem.link}>
            <div className={css.navSubItem}>
              <div className={css.content}>
                {subItem.label}
              </div>
            </div>
          </Link>
        ))}
      </React.Fragment>
    )
  }
}
