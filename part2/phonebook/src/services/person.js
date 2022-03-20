import axios from "axios";

export const createPerson = async ({ name, number }) => {
  const response = await axios.post(`http://localhost:3001/persons`, {
    name,
    number,
    id: window.crypto.randomUUID(),
  });

  return response.data;
};

export const deletePerson = async (id) => {
  const response = await axios.delete(`http://localhost:3001/persons/${id}`);

  return response.data;
};

export const updatePerson = async (newPerson) => {
  const response = await axios.put(`http://localhost:3001/persons/${newPerson.id}`, {
    ...newPerson,
  });

  return response.data;
};
