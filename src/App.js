import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Demo"} - By
          Pratiksha Sankhe
        </p>
      </header>
    </div>
  );
}

export default App;
