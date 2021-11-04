export default function GenreFilter({ products, genre, setGenre }) {
  const genres = ['All genres', ...new Set(products.map((product) => product.genre))];
  console.log(genres, products);
  return (
    <fieldset>
      <legend>Select your genre</legend>
      {genres.map((gen) => (
        <label htmlFor={gen} key={gen}>
          {gen}
          <input
            type="radio"
            name="genre"
            id={gen}
            value={gen}
            checked={gen === genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
      ))}
    </fieldset>
  );
}
