export default function PriceFilter({ min, setMin, max, setMax }) {
  return (
    <fieldset className="fieldset--full-width">
      <legend>Price</legend>
      <label htmlFor="min-price">
        Min price
        <input
          type="range"
          id="min-price"
          min="0"
          max="200"
          step="10"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
      </label>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="0"
          max="200"
          step="10"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </label>
    </fieldset>
  );
}
