import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FormattedDate, FormattedMessage } from "react-intl";
import SelectLanguages from "./components/SelectLanguages";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <SelectLanguages />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <FormattedMessage id="app.content" />
        </p>
      </div>
      <p className="read-the-docs">
        <FormattedMessage id="app.docs" values={{ user: "Neoland" }} />
      </p>
      <h2>
        <FormattedDate
          value={Date.now()}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </h2>
    </div>
  );
}

export default App;
