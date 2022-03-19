import { useState } from "react";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      anecdote: "If it hurts, do it more often",
      vote: 0,
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      vote: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
      vote: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);

  const handleRandomAnecdotesGeneration = () => {
    const randomChoice = Math.floor(Math.random() * anecdotes.length);
    setSelected((prevSelected) => randomChoice);
  };

  const handleAddVote = () => {
    const currentAnecdotes = anecdotes;
    currentAnecdotes[selected].vote++;
    setAnecdotes([...currentAnecdotes]);
  };

  const maxVotesAnecdote = () => {
    return anecdotes.reduce(
      (a, b) => {
        if (a.vote < b.vote) {
          return b;
        }

        return a;
      },
      { anecdote: null, vote: -1 }
    );
  };

  return (
    <div>
      <h1>Anecdote: </h1>
      {anecdotes[selected].anecdote}
      <h1>Votes</h1>
      {anecdotes[selected].vote} --{" "}
      <button onClick={handleAddVote}>add vote</button>
      <br />
      <button onClick={handleRandomAnecdotesGeneration}>Next Anecdote</button>
      <h1>Anecdote with most votes:</h1>
      {maxVotesAnecdote().anecdote}
    </div>
  );
};

export default App;
