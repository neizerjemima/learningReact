import './App.css';
import {useState, useEffect} from "react";

const fam = [
  { name: "Maame Ama", Age: 26},
  { name: "Fred", Age: 20},
  { name: "Victoria", Age: 17},
  { name: "Richard", Age: 14},
];

function List ({data, renderItem, renderEmpty}) {
  return !data.length ? (
    renderEmpty) : (
      <ul>
        {data.map((item) =>(
          <li key={item.name}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
}

function App() {
  return (
    <List data={fam}
    renderEmpty={<p>Aleart Fam is missing</p>}
    renderItem={(item) => (
      <> {item.name} - {item.Age} years old.</>
    )}
    />
  );
}

export default App;
