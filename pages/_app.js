import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider, css } from 'styled-components';
import Layout from './layout';

import './antd-styles.less';

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
  sidenavWidth: '300px',
}

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }


    return { pageProps }
  }

  constructor(...args) {
    super(...args)
  }

  render() {
    const { Component, reduxStore, pageProps } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </Container >
    )
  }
}

export default withReduxStore(MyApp)