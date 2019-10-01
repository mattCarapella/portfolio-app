import React from 'react'
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';
import auth0 from '../services/auth0';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    //let isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let isAuthenticated = false;
    if (user) {
      isAuthenticated = true;
    }

    const isSiteOwner =  user && user[process.env.NAMESPACE + '/roles'] === 'siteOwner';
    const auth = { user, isAuthenticated, isSiteOwner  };

    return { pageProps, auth };
  } 

  notify = () => toast("Wow so easy !");

  render() {
    const { Component, pageProps, auth } = this.props
    return (
      <Container>
        <ToastContainer />
        <Component {...pageProps} auth={auth} />
      </Container>
    )
  }
}

export default MyApp