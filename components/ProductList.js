import Link from 'next/dist/client/link';

export default function ProductList({ products, min, max, genre, publisher }) {
  return (
    <ul>
      {products
        .filter((product) =>
          publisher === 'All' ? true : product.publisher === publisher
        )
        .filter((product) => genre === 'All' ? products : product.genre === genre)
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
