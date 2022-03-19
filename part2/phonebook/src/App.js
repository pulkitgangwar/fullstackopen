import { useEffect, useState } from "react";
import axios from "axios";
import People from "./components/People";
import PhoneBookForm from "./components/PhoneBookForm";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchedPersons, setSearchedPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPersons = async () => {
      try {
        const response = await axios.get("http://localhost:3001/persons");

        setPersons(response.data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPersons();
  }, []);

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

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (!loading && error) {
    return <h1>{error}</h1>;
  }

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
