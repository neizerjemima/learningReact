import './App.css';
import {useRef} from "react";
// const countries = ["Greece", "Mexico", "Philipines", "Maldives", "Costa Rica"];

function App() {
  const textTitle = useRef();
  const hexColour = useRef();
  const submit = (e) => {e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColour.current.value;
    alert(`${title},${color}`);
    textTitle.current.value = "";
    hexColour.current.value="";
  };

  return (
    <form onSubmit={submit}>
      <input ref={textTitle} type="text" placeholder="colour Title" />
      <input ref={hexColour} type="color" />
      <button>My Color</button>
    </form>
  );
}

export default App;
