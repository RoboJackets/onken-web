import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './styles.less';
import SideNav from '../components/sidenav';
import { fetchUser } from './actions';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';

Router.onRouteChangeStart = (url) => {
  if (window.location.pathname !== url)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser())
  }
  render() {
    const { router } = this.props
    return (
      <div className={css.container}>
        <SideNav path={router ? router.asPath : ''} />
        <div className={css.pageContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect()(withRouter(Layout))
