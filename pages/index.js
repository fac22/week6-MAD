import Head from 'next/head';
import Link from 'next/link';
import { getProducts } from '../database/model.js';

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>MAD GAMES</title>
        <meta name="description" content="MAD GAMES Online Store" />
      </Head>

      <main>
        <section>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a>{product.name}</a>
                </Link>
                , £{product.price}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
