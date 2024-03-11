import './App.css';
import {useReducer} from "react";
// const countries = ["Greece", "Mexico", "Philipines", "Maldives", "Costa Rica"];

function App() {
  const [country, nextCountry] = useReducer(country=>!country,false);

  return (
    <div className="App">
      <input type="checkbox" value={country} onChange={nextCountry} />
      <label>{country ? "Maldives":"Home"}</label>
    </div>
  );
}

export default App;
