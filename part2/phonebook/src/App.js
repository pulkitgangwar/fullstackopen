import { useState } from "react";
import People from "./components/People";
import Person from "./components/Person";
import PhoneBookForm from "./components/PhoneBookForm";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "040-123456", id: 1 },
    { name: "Ada Lovelace", phoneNumber: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phoneNumber: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phoneNumber: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchedPersons, setSearchedPersons] = useState([]);

  const handleAddName = (e) => {
    e.preventDefault();
    if (!newName || !phoneNumber) return;

    const oldPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (oldPerson) {
      alert(`${newName} already exists`);
      return;
    }

    setPersons([
      ...persons,
      { name: newName, id: window.crypto.randomUUID(), phoneNumber },
    ]);
    setNewName("");
    setPhoneNumber("");
  };

  const handleSearch = (e) => {
    if (!search) {
      setSearchedPersons([]);
      return;
    }

    const searchedPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );

    setSearchedPersons([...searchedPersons]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        onSearchChange={(e) => setSearch(e.target.value)}
        search={search}
        handleSearch={handleSearch}
      />
      <PhoneBookForm
        onAddName={handleAddName}
        onNewNameChange={(e) => setNewName(e.target.value)}
        onPhoneNumberChange={(e) => setPhoneNumber(e.target.value)}
        newName={newName}
        phoneNumber={phoneNumber}
      />

      <People persons={searchedPersons.length ? searchedPersons : persons} />
    </div>
  );
};

export default App;
