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
      <h1>My Story</h1>
      <p>Let me tell you a bit about myself. It all started with a three-year Graphic Design Program – imagine a young me, armed with nothing but a pencil and a dream to create. Fast forward to today, and I'm currently diving headfirst into the exciting world of Interactive Media Design at Fanshawe College. It's like being a kid in a candy store, but instead of candy, it's coding, design, and all things user experience!<br></br>Now, picture this: me, hunched over my laptop, coding away like a mad scientist mixing potions. HTML, CSS, JavaScript – you name it, I'm all over it! But hey, it's not all about the code. I'm also a sucker for design-sleek, elegant, and oh-so-stylish. Because let's be real, who doesn't love a beautifully crafted interface? <br></br>But here's the kicker – I'm not just about making things look pretty. Nope, I'm all about creating experiences that make you go "WOW." That's right, I'm on a mission to craft digital solutions that not only meet users' needs but exceed their wildest expectations. And trust me, I take my job as a digital magician very seriously.Now, enough about me – let's talk teamwork. Because let's face it, no man (or woman) is an island. I thrive in collaborative environments, where ideas are flowing, and creativity knows no bounds.<br></br>Whether it's bouncing ideas off fellow designers or diving into the trenches with developers, count me in!So, what's next on this crazy adventure called life? Well, my goal is simple – to become the rockstar front-end developer that everyone's talking about. I'm talking jaw-dropping User Interfaces (UI), mind-blowing User Experiences (UX), the whole nine yards!</p>
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
