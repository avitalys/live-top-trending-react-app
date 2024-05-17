import { useState } from "react";
import { Button } from "./components/Button";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import themes from "./themes";

function App() {
  const [count, setCount] = useState(0);

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return "Hello, " + person.firstName;
  }

  const user = { firstName: "Jane", lastName: "Austen" };

  return (
    <ThemeProvider theme={themes.purple}>
      <h3>{greeter(user)}</h3>
      <h1>Vite + React</h1>
      <div className="card">
        <Button $primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <img src="/vite.svg" alt="Vite logo" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
