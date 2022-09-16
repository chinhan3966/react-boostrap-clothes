import logo from "./logo.svg";
import "./App.css";

import { CustomNavbar } from "./components/common/CustomNavbar";

import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
// import Home from "./components/Home";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import Footer from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { setUserGg } from "./redux/actions";
function App() {
  const [isTop, setIsTop] = useState(0);
  // const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let isSignInPathName = pathname == "/sign-in";
  let isSignUpPathName = pathname == "/sign-up";
  const { loginGG, loginDB } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loginGG?.uid) {
      dispatch(setUserGg());
    }
  }, []);

  useEffect(() => {
    const hasLogin = loginGG && loginGG?.uid;
    //  const isRequiredAuth = routesConfig[pathname]?.requiresAuth || false;

    if ((isSignInPathName && hasLogin) || (isSignUpPathName && hasLogin)) {
      navigate("/");
    }
  }, [loginGG, pathname]);

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
    <div>
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
        autoClose={1000}
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
    </div>
  );
}

export default App;
