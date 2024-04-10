import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header rounded shadow mb-5">
          <h1>Dictionary</h1>
          <h2>What word do you want to look up?</h2>
        </header>
        <main>
          <Dictionary defaultWord="aurora" />
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
