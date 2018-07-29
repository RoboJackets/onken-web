import React, { Component } from 'react';
import css from './styles.less';

export default class PageHeader extends Component {
  render() {
    const { name } = this.props
    return (
      <div className={css.container}>
        <h1 className={css.header}>{name}</h1>
      </div>
    )
  }
};
