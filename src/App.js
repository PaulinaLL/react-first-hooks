import React, { useState } from "react";
import "./App.css";
import ContactList from "./components/Contact-List";
import SearchBar from "./components/Search-bar";
import data from "./data/data.json";

function App() {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const filteredContacts = data.filter((contact) => {
    return contact.first.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className="App">
      <h1>My contacts</h1>
      <SearchBar inputValue={inputValue} setInputValue={changeHandler} />
      <ContactList data={filteredContacts} />
    </div>
  );
}

export default App;
