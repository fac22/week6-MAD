import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = React.useState({});
  console.log('app', basket);
  return <Component {...{ ...pageProps, basket, setBasket }} />;
}

export default MyApp;
