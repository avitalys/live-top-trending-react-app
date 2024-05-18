// import { useState } from "react";
// import Button from "./components/Button";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsContainer from "./components/CardsContainer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={themes.purple}>
      {/* <img src="/vite.svg" alt="Vite logo" />
      <div className="card">
        <Button $primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div> */}

      <Header />
      <CardsContainer />
      <Footer>
        <p>&copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.</p>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
