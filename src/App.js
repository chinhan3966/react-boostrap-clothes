import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Boostrap from "./components/Boostrap";
import { CustomNavbar } from "./components/CustomNavbar";
import Banner from "./components/Banner";
import Album from "./components/Album";

function App() {
  return (
    <>
      <CustomNavbar />
      <Banner />
      <Album />
    </>
  );
}

export default App;
