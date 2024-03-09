const images = [
    "Wedding Photography",
    "Studio Photography",
    "Conceptual Photography",
];

const imagesObj = images.map((photo, i) => ({
        id: i,
        title: photo
    })
);

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name} Studio</h1>
    </header>
  );
}

// function Main(props) {
//   return (
//     <section>
//       <p>We capture memories that last a {props.adjective}</p>
//     </section>
//   );
// }

function Main(props) {
    return (
      <section>
        <img height={200} src="images/photographer.jpg" alt="Photographer of this studio"/>
        <ul>
        {props.images.map((photo) => (
            <li key={photo.id}>{photo.title}</li>
        ))}

    </ul>
        <p>We capture memories that last a {props.adjective}</p>
      </section>
    );
  }

function Footer(props) {
    return (
      <footer>
        <p>Copyright {props.year}</p>
      </footer>
    );
 }

function App() {
  return (
    <React.Fragment>
      <Header name="Victoria"/>
      <Main 
        adjective="centries"
        images={imagesObj}
      />
      <Footer year={new Date().getFullYear()}/>
    </React.Fragment>
  );
}
// Another way JSX can be rendered
// ReactDOM.render(
//   <div>
//     <Header />
//     <Main />
//   </div>, document.getElementById("root")
// )

  ReactDOM.render( <App />,
  document.getElementById("root")
);
