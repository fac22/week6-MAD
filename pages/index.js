import React from 'react';
import Head from 'next/head';
import { getProducts } from '../database/model.js';
import Layout from '../components/Layout.js';
import PriceFilter from '../components/PriceFilter.js';
import ProductList from '../components/ProductList.js';
import CategoryFilter from '../components/CategoryFilter.js';
import PubFilter from '../components/PubFilter.js';
import GenreFilter from '../components/GenreFilter.js';

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

export default function Home({ products, basket, setBasket }) {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(200);
  const [category, setCategory] = React.useState('All');
  const [publisher, setPublisher] = React.useState('All');
  const [genre, setGenre] = React.useState('All');

  React.useEffect(() => {
    const localNumsStrs = Object.values(window.localStorage);
    const localNums = localNumsStrs.map((numStr) => parseInt(numStr));
    const localKeys = Object.keys(window.localStorage);

    const obj = {};
    localKeys.forEach((key, i) => (obj[key] = localNums[i]));

    setBasket((oldBasket) => {
      return { ...oldBasket, ...obj };
    });
  }, []);

  return (
    <Layout home basket={basket} setBasket={setBasket}>
      <Head>
        <title>MAD GAMES</title>
        <meta name="description" content="MAD GAMES Online Store" />
      </Head>

      <section>
        <form>
          <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
          <div className="radios">
            <CategoryFilter
              products={products}
              category={category}
              setCategory={setCategory}
            />
            <PubFilter
              publisher={publisher}
              setPublisher={setPublisher}
              products={products}
            />
            <GenreFilter
              products={products}
              genre={genre}
              setGenre={setGenre}
            />
          </div>
        </form>
      </section>
      <section>
        <ProductList
          products={products}
          min={min}
          max={max}
          publisher={publisher}
          genre={genre}
          category={category}
        />
      </section>
    </Layout>
  );
}
