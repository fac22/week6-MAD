import { getProduct, getProducts } from '../../database/model.js';
import Layout from '../../components/Layout.js';
import React from 'react';

export async function getStaticProps({ params }) {
  const product = await getProduct(params.name);
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return {
      params: {
        name: product.name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function Product({ product, basket, setBasket }) {
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

  const basketShenanigans = () => {
    const storedItem = window.localStorage.getItem(`${product.name}`);
    if (storedItem) {
      window.localStorage.setItem(`${product.name}`, parseInt(storedItem) + 1);
      setBasket((oldBasket) => {
        return {
          ...oldBasket,
          [product.name]: oldBasket[product.name] + 1,
        };
      });
    } else {
      window.localStorage.setItem(`${product.name}`, '1');
      setBasket((oldBasket) => {
        return { ...oldBasket, [product.name]: 1 };
      });
    }
  };

  return (
    <Layout basket={basket} setBasket={setBasket}>
      <section>
        <header>
          <h2>{product.name}</h2>
          <p>
            <i>
              {`${product.publisher ? `${product.publisher}, ` : ''}`}
              {product.created_at}, {product.category}, {product.genre}
            </i>
          </p>
        </header>
        <p>
          <b>£{product.price}</b>
        </p>
        <p>Current stock: {product.stock}</p>
        {product.description ? (
          <>
            <h3>Description</h3>
            {product.id === 1 ? (
              <p>
                {product.description}{' '}
                <a
                  href="https://heuristic-spence-8ef2b4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try the demo here!
                </a>
              </p>
            ) : (
              <p> {product.description} </p>
            )}
          </>
        ) : null}
        <button onClick={basketShenanigans}>Add to basket</button>
      </section>
    </Layout>
  );
}
