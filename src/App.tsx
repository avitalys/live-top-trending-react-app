import { useState } from "react";
import Button from "./components/Button";
import "./App.scss";
// import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const user = { firstName: "Jane", lastName: "Austen" };

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return "Hello, " + person.firstName;
  }

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <h3>{greeter(user)}</h3>
      <div>
        <h1>My React App</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button primary onClick={handleClick}>
          Primary Button
        </Button>
      </div>
    </>
  );
}

export default App;
