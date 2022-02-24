import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Boostrap from "./components/Boostrap";
import { CustomNavbar } from "./components/CustomNavbar";

function App() {
  return (
    <>
      <CustomNavbar />
      <Boostrap />
    </>
  );
}

export default App;
