import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { partTitle: "Fundamentals of React", exerciseNumber: 10 },
    { partTitle: "Using props to pass data", exerciseNumber: 7 },
    { partTitle: "State of a component", exerciseNumber: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
