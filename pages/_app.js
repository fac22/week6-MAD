import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = React.useState({});
  return <Component {...{ ...pageProps, basket, setBasket }} />;
}

export default MyApp;
