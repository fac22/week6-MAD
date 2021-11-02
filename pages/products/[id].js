import { getProduct } from '../../database/model.js';

export async function getServerSideProps({ params }) {
  const product = await getProduct(params.id);
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Product({ product }) {
  return <p>{product.name}</p>;
}
