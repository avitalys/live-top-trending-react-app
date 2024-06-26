import ScrollMenu from "./../components/ScrollMenu";
import { catogeries } from "./../consts";
import { useState } from "react";
import CardsContainer from "./../layouts/CardsContainer";

const user = { firstName: "Jane", lastName: "Austen" };

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName;
}

const Home = () => {
  const [category, setCategory] = useState(catogeries[0]);

  const onCategoryChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <div>
        <h2>
          <p>Select your interest - </p>
          <p>dive into the latest!</p>
        </h2>

        <h3>
          <p>{greeter(user)}</p>
          <p>Choose what you want to read:</p>
        </h3>

        <ScrollMenu
          menuItems={catogeries}
          onMenuItemSelected={onCategoryChanged}
        />
        <CardsContainer category={category} />
      </div>
    </>
  );
};

export default Home;
