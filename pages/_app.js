// import App from 'next/app'
import React from 'react';
import { BaseCss } from '@pomegranate-ui/base-css';
// import { jsx, Global, css } from '@emotion/core';
import { CacheProvider } from '@emotion/core';
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            
            <CacheProvider value={cache}>
                 <BaseCss />
                <Component {...pageProps} />
            </CacheProvider>
        </React.Fragment>
    )
    // return <Component {...pageProps} />
}

{/* <Component {...pageProps} /> */ }
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;