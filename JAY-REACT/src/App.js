import './App.css';
import {useState} from "react";
// const countries = ["Greece", "Mexico", "Philipines", "Maldives", "Costa Rica"];
const [firstCountry, second] = [
        "Greece",
        "Mexico",
        "Maldives"
];

function App({library}) {
  return (
    <div className="App">
      <h1>Vacation Countries List For {library}</h1>
    </div>
  );
}

export default App;
