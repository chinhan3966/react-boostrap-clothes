import logo from "./logo.svg";
import "./App.css";

import { CustomNavbar } from "./components/common/CustomNavbar";

import { Provider } from "react-redux";
import store from "./redux/store";
// import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import Footer from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  const [isTop, setIsTop] = useState(0);
  // console.log("check is top", isTop);

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
      <Footer />
      <div>
        {isTop > 1000 ? (
          <div className="fixedToTop" onClick={handleOntop}>
            <BsChevronUp size={"20px"} />
          </div>
        ) : (
          ""
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </Provider>
  );
}

export default App;
