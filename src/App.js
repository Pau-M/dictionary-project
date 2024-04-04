import "./App.css";
import Dictionary from "./Dictionary";
import icon from "./book-icon.png";

function App() {
  return (
    <div className="App">
      <div className="container rounded shadow">
        <header className="App-header text-center mb-5">
          <img
            src={icon}
            className="app-icon img-fluid"
            alt="dictionary-icon"
          />
          <h1>Dictionary Project</h1>
        </header>

        <main>
          <Dictionary />
        </main>
        <hr />
        <footer className="text-center">
          Dictionary Project coded by PM open-sourced on
          <a
            href="https://github.com/Pau-M/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://dictionary-project-pau.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
