import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollMenu from "./components/ScrollMenu";
import { brand, navBarItems } from "./consts";

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
      <div className="wrapper">
        <NavBar outline items={navBarItems} brand={brand} />
        <div className="content">
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

          <div>
            <ScrollMenu />
          </div>
        </div>

        <Footer>
          <p>
            &copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.
          </p>
        </Footer>
      </div>
    </>
  );
}

export default App;
