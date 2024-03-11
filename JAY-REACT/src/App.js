import './App.css';
import {useState,useEffect} from "react";
// const countries = ["Greece", "Mexico", "Philipines", "Maldives", "Costa Rica"];

function App() {
  const [country, nextCountry] = useState("Greece");
  const [secondary, setSecondary] = useState("Home");

  useEffect(()=> {
    console.log (`Next location is ${country}`);
  },[country]);

  useEffect(()=> {
    console.log (`Current location: ${secondary}`);
  },[secondary]);

  return (
    <div className="App">
      <h1>I am on a flight to {country}</h1>
      <button onClick={() => nextCountry("Maldives")}>Previous</button>
      <button onClick={() => nextCountry("Costa Rica")}>Next</button>
      <h2>Moving from {secondary}</h2>
      <button onClick={() => setSecondary("Cafe")}>Current</button>
    </div>
  );
}

export default App;
