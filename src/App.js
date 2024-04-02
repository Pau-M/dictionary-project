import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header">Dictionary Project</header>
        <a
          href="https://www.shecodes.io/learn/cohorts/1767/units/69/lessons/254"
          className="btn btn-primary"
        >
          Click
        </a>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by PM</footer>
      </div>
    </div>
  );
}

export default App;
