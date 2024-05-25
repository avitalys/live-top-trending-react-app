import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { brand } from "./consts";
import Home from "./pages/Home";
import Design from "./pages/Design";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <NavBar brand={brand}>
            <Link to={"/"}>Home</Link>
            <Link to={"/design-system"}>Design</Link>
            <Link to={"/about"}>About</Link>
          </NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-system" element={<Design />} />
          </Routes>

          <Outlet />

          <Footer>
            <p>
              &copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.
            </p>
          </Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
