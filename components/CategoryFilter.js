export default function CategoryFilter({ products, category, setCategory }) {
  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((cat) => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name={cat}
            id={cat}
            value={cat}
            checked={cat === category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}
