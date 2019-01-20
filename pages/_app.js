import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider, css, createGlobalStyle } from 'styled-components'
import Layout from './layout'

import './antd-styles.less'

const theme = {
  primaryDark: {
    1: '#333',
    2: '#444',
    3: '#666',
  },
  primaryLight: {
    1: '#fbfbfb',
  },
  primary: '#F2D600',
  buttonBase: css`
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
  `,
  sidenavWidth: 22,
}

const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }

  * {
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif !important;
  }
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container >
    )
  }
}

export default MyApp