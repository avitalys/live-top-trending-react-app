import "./styles/styles.css";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsContainer from "./components/CardsContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "./styles/Global";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider theme={themes.trendy}>
        <Global />
        <QueryClientProvider client={queryClient}>
          <Header />
          <CardsContainer />
          <Footer>
            <p>
              &copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.
            </p>
          </Footer>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
