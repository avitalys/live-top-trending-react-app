import { useState } from "react";
import Button from "./../components/Button";
import ScrollMenu from "./../components/ScrollMenu";
import { brand, catogeries, navBarItems } from "./../consts";
import NavBar from "../components/NavBar";

function Design() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="wrapper">
        <NavBar outline items={navBarItems} brand={brand} />
      </div>
      <div className="wrapper">
        <h1>HeadLine H1</h1>
        <h3>HeadLine H3</h3>
        <h5>HeadLine H5</h5>
      </div>
      <div className="wrapper">
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

      <div className="wrapper">
        <ScrollMenu
          menuItems={catogeries}
          onMenuItemSelected={(item: string) => {
            console.log(item);
          }}
        />
      </div>
    </>
  );
}

export default Design;
