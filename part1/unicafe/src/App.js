import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = (e) => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = (e) => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = (e) => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onButtonClick={handleGoodFeedback}>Good</Button>
      <Button onButtonClick={handleNeutralFeedback}>Neutral</Button>
      <Button onButtonClick={handleBadFeedback}>Bad</Button>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
