import { useEffect, useState } from "react";
import axios from "axios";
import People from "./components/People";
import PhoneBookForm from "./components/PhoneBookForm";
import Search from "./components/Search";
import { createPerson, deletePerson, updatePerson } from "./services/person";

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

  const handleAddName = async (e) => {
    e.preventDefault();
    if (!newName || !phoneNumber) return;

    const oldPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (oldPerson) {
      // alert(`${newName} already exists`);
      handleUpdate({ name: newName, number: phoneNumber }, oldPerson);

      return;
    }

    const newPerson = await createPerson({
      name: newName,
      number: phoneNumber,
    });
    setPersons([...persons, newPerson]);
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

  const handleDelete = async (id) => {
    const userResponse = window.confirm();
    if (!userResponse) return;
    await deletePerson(id);
    const newPersons = persons.filter((person) => person.id !== id);
    setPersons([...newPersons]);
  };

  const handleUpdate = async (newPerson, oldPerson) => {
    const userResponse = window.confirm(
      `${oldPerson.name} is already added to phonebook, replace the old number with new one?`
    );

    if (!userResponse) return;

    const updatedPerson = await updatePerson({
      ...newPerson,
      id: oldPerson.id,
    });

    const newPersonsArr = persons.map((person) =>
      person.id === oldPerson.id ? { ...updatedPerson } : person
    );

    setPersons([...newPersonsArr]);
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

      <People
        onDelete={handleDelete}
        persons={searchedPersons.length ? searchedPersons : persons}
      />
    </div>
  );
};

export default App;
