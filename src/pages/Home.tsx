import ScrollMenu from "./../components/ScrollMenu";
import { catogeries } from "./../consts";

function Home() {
  const user = { firstName: "Jane", lastName: "Austen" };

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return "Hello, " + person.firstName;
  }

  const onCategoryChanged = (category: string) => {
    console.log(category);
  };

  return (
    <>
      <div className="content">
        <h2>{greeter(user)}</h2>
        <h1>Select your interest – dive into the latest!</h1>
        <h3>Choose what you want to read:</h3>

        <div>
          <ScrollMenu
            menuItems={catogeries}
            onMenuItemSelected={onCategoryChanged}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
