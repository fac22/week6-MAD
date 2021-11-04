import Link from 'next/dist/client/link';

export default function ProductList({
  products,
  min,
  max,
  genre,
  publisher,
  category,
}) {
  const listItems = products
    .filter((product) =>
      category === 'All' ? products : product.category === category
    )
    .filter((product) =>
      publisher === 'All' ? true : product.publisher === publisher
    )
    .filter((product) => (genre === 'All' ? products : product.genre === genre))
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
    });
  return (
    <ul>
      {listItems.length ? listItems : <li>No items match your filters!</li>}
    </ul>
  );
}
