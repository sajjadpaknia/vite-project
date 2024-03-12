const SearchInput = ({ setSearchValue }: any) => {
  return (
    <input
      onChange={({ target }) => setSearchValue(target.value)}
      type="search"
      placeholder="Search..."
      className="outline-none px-2 py-1 rounded"
    />
  );
};

export default SearchInput;
