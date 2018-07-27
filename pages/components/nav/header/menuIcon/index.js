import React, { Component } from 'react';
import css from './styles.less';

export default class MenuIcon extends Component {
  render() {
    const { onClick, expanded } = this.props
    return (
      <button className={expanded ? css.containerExpanded : css.container} onClick={onClick}>
        <div className={css.bar1} />
        <div className={css.bar2} />
        <div className={css.bar3} />
      </button>
    )
  }
}
