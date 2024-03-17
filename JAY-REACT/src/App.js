import './App.css';
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Portfolio</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Me</h1>
      <Outlet/>
    </div>
  );
}

export function Myself() {
  return (
    <div>
      <h1>My Story</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </nav>
      <h1>Contact Me</h1>
    </div>
  );
}

export function App() {
  return (
  <Home />
  );
}



export default App;
