import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
// import Navbar from "./components/Navbar";
import Boostrap from "./components/Boostrap";
import { CustomNavbar } from "./components/CustomNavbar";
import Banner from "./components/Banner";
import Album from "./components/Album";
import dataContext from "./components/Context";
import data from "../src/fakeData/data";
import NewtShirt from "./components/NewtShirt";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <CustomNavbar />
      <Outlet />
    </Provider>
  );
}

export default App;
