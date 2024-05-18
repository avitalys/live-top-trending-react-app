import { useState } from "react";
import Button from "./components/Button";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={themes.purple}>
      <img src="/vite.svg" alt="Vite logo" />
      {/* <h3>{greeter(user)}</h3> */}
      <div className="card">
        <Button $primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

      <Header />

      <div className="main-content container">
        <div className="article-card">
          <h2>Article Title 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam
            nulla. Donec venenatis, enim ut aliquam mattis, elit turpis
            vestibulum elit, nec vehicula enim urna ac sapien.
          </p>
        </div>

        <div className="article-card">
          <h2>Article Title 2</h2>
          <p>
            Integer nec nibh nec libero pretium auctor. Proin malesuada risus in
            neque luctus, vel lobortis sapien laoreet. Nulla facilisi.
          </p>
        </div>
      </div>

      <Footer>
        <p>&copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.</p>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
