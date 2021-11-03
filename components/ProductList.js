import Link from 'next/dist/client/link';

export default function ProductList({ products, category, min, max }) {
  return (
    <ul>
      {products
        .filter((product) =>
          category === 'All' ? products : product.category === category
        )
        .filter(
          (product) =>
            parseInt(product.price) >= min && parseInt(product.price) <= max
        )
        .map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/products/${product.name}`}>
                <a>{product.name}</a>
              </Link>
              , £{product.price}
            </li>
          );
        })}
    </ul>
  );
}
