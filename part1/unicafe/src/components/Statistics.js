import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
  if (!good && !bad && !neutral) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback provided.</p>
      </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>
      <table style={{ textAlign: "left" }}>
        <StatisticLine statistics={{ title: "Good", value: good }} />

        <StatisticLine statistics={{ title: "Neutral", value: neutral }} />

        <StatisticLine statistics={{ title: "Bad", value: bad }} />

        <StatisticLine
          statistics={{ title: "All", value: bad + neutral + good }}
        />

        <StatisticLine
          statistics={{
            title: "Average",
            value: `${(bad + neutral + good) / 3}`,
          }}
        />

        <StatisticLine
          statistics={{
            title: "Positive %",
            value: `${(100 * (good - bad)) / good}%`,
          }}
        />
      </table>
    </>
  );
};

export default Statistics;
