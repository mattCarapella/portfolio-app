import React from 'react'
import App, { Container } from 'next/app'
import auth0 from '../services/auth0';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

    // if (process.browser) {
    //   isAuthenticated = 'clientAuth()';
    // }
    // else {
    //   isAuthenticated = 'serverAuth()'
    // }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const auth = { isAuthenticated };

    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props
    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    )
  }
}

export default MyApp