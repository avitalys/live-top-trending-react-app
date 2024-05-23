import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

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

  const brand = {
    title: "Trendy Meter",
    image: "/vite.svg",
    href: "google.com",
  };

  const items = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <>
      <NavBar outline items={items} brand={brand} />
      <h3>{greeter(user)}</h3>
      <div>
        <h1>My React App</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button primary onClick={handleClick}>
          Primary Button
        </Button>
        <Button primary outline onClick={handleClick}>
          Primary outline Button
        </Button>
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      </div>
    </>
  );
}

export default App;
