import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
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
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  render() {
    return (
      <Container>
        <Nav />
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
}

export default connect()(Layout)