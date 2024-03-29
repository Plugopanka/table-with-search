import "./SearchForm.css";

function SearchForm({ text, handleChangeText }) {
  return (
    <section className="search">
      <label className="search__label">
        <input
          className="search__input"
          name="search-input"
          id="search-input"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChangeText}
        />
      </label>
    </section>
  );
}

export default SearchForm;
