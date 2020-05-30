import React from "react";

function SearchBar({ inputValue, setInputValue }) {
  return (
    <div>
      <form>
        <label>Search by first name</label>
        <input value={inputValue} onChange={setInputValue}></input>
      </form>
    </div>
  );
}

export default SearchBar;
