import logo from "./logo.svg";
import "./App.css";

import { CustomNavbar } from "./components/common/CustomNavbar";

import { Provider } from "react-redux";
import store from "./redux/store";
// import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
function App() {
  const [isTop, setIsTop] = useState(0);

  useEffect(() => {
    const handleScrollY = (e) => {
      setIsTop(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Provider store={store}>
      <CustomNavbar />
      <Outlet />
      <div>
        {isTop > 1000 ? (
          <div className="fixedToTop" onClick={handleOntop}>
            <BsChevronUp size={"20px"} />
          </div>
        ) : (
          ""
        )}
      </div>
    </Provider>
  );
}

export default App;
