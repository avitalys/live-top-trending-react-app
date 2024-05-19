// import { useState } from "react";
// import Button from "./components/Button";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsContainer from "./components/CardsContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={themes.purple}>
      <QueryClientProvider client={queryClient}>
        {/* <img src="/vite.svg" alt="Vite logo" />
      <div className="card">
        <Button $primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div> */}

        <Header />
        <CardsContainer />
        <Footer>
          <p>
            &copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.
          </p>
        </Footer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
