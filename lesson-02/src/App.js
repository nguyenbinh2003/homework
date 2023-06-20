import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Enter your task here" className="input" />
      <Card text="Clean up house" />
      <Card text="Buy some milk" />
      <Card text="Jogging" />
      <Card text="Learn React" />
      <Card text="Doing Exercises" />
      <div className="todolist">
        <p>5 tasks left!</p>
        <p>Mindx todolist</p>
      </div>
    </div>
  );
}

export default App;
