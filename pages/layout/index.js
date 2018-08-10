import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import Nav from '../components/nav'
import { actions } from './actions'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  if (window.location.pathname !== url)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const PageContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  height: 100vh;
  padding-top: 90px;
`

class Layout extends Component {
  constructor() {
    super()
    this.state = {}
  }
  onWindowResize = () => {
    const isNarrow = window.matchMedia(`(max-width: ${this.props.theme.sidenavWidth * 3}em)`).matches
    this.setState({ showNav: !isNarrow })
  }
  onToggleNav = () => {
    this.setState({ showNav: !this.state.showNav })
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.showNav !== nextState.showNav ||
      this.props.children !== nextProps.children
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()
    this.props.dispatch(actions.fetchUser())
  }
  render() {
    return this.state.hasOwnProperty('showNav') && (
      <Container>
        <Nav showNav={this.state.showNav} onToggleNav={this.onToggleNav} />
        <PageContainer>
          {this.props.children}
        </PageContainer>
      </Container>
    )
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(connect()(Layout))