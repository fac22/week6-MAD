import { getProduct, getProducts } from '../../database/model.js';
import Layout from '../../components/layout.js';

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

export default function Product({ product }) {
  return (
    <Layout>
      <p>{product.name}</p>
    </Layout>
  );
}
