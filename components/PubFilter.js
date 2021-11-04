export default function PubFilter({ publisher, setPublisher, products }) {
  const publishers = [
    'All',
    ...new Set(
      products
        .filter((product) => product.publisher)
        .map((product) => product.publisher)
    ),
  ];
  return (
    <fieldset>
      <legend>Publisher</legend>
      {publishers.map((pub) => (
        <label htmlFor={pub} key={pub}>
          {pub}
          <input
            type="radio"
            name="publishers"
            id={pub}
            value={pub}
            checked={pub === publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}
