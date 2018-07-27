import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './styles.less';
import Nav from '../components/nav';
import { actions } from './actions';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
  if (window.location.pathname !== url)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  render() {
    return (
      <div className={css.container}>
        <Nav />
        <div className={css.pageContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect()(Layout)
