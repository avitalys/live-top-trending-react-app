import { useState } from "react";
import Button from "./components/Button";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
// import Header from "./components/Header";

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
      <div className="card">
        <Button $primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
