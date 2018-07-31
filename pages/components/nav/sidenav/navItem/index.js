import React, { Component } from 'react';
import Link from 'next/link';
import * as styles from './styles';
import NavIcon from '../../navIcon';

const { Button, Content, DropdownIconWrapper, StyledNavIcon } = styles

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
          <Button onClick={this.onItemClick}>
            <NavIcon name={icon} />
            <Content>
              {label}
            </Content>
            {subItems && <DropdownIconWrapper>
              <StyledNavIcon name="dropdown-arrow" active={itemExpanded} />
            </DropdownIconWrapper>}
          </Button>
        </Link>

        {itemExpanded && subItems.map((subItem, index) => (
          <Link key={index} href={link + subItem.link}>
            <Button subItem>
              <Content>
                {subItem.label}
              </Content>
            </Button>
          </Link>
        ))}
      </React.Fragment>
    )
  }
}
