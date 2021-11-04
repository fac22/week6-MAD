import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getProducts } from '../database/model.js';
import Layout from '../components/layout.js';
import PriceFilter from '../components/PriceFilter.js';
import ProductList from '../components/ProductList.js';
import PubFilter from '../components/PubFilter.js';

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

export default function Home({ products }) {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(200);
  const [publisher, setPublisher] = React.useState('All');
  return (
    <Layout home>
      <Head>
        <title>MAD GAMES</title>
        <meta name="description" content="MAD GAMES Online Store" />
      </Head>

      <main>
        <section>
          <form>
            <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
            <PubFilter
              publisher={publisher}
              setPublisher={setPublisher}
              products={products}
            />
          </form>
        </section>
        <section>
          <ProductList
            products={products}
            min={min}
            max={max}
            publisher={publisher}
          />
        </section>
      </main>
    </Layout>
  );
}
