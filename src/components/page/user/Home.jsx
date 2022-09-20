import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import Album from "../../Album";
import Banner from "../../Banner";
import BestSeller from "../../BestSeller";
import Boostrap from "../../Boostrap";
import HotDeal from "../../HotDeal";
import NewArrival from "../../NewArrival";
import NewtShirt from "../../NewtShirt";
import News from "../../News";
import Helmet from "../../common/Helmet";
import banner from "../../../assets/banner/banner-popup.jpg";

const Home = () => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShowPopUp(true);
    }, 10000);
  }, []);
  return (
    <Helmet title="Home">
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{
        //   x: window.innerWidth,
        //   transition: { duration: 0.1 },
        // }}
      >
        <div className="mb-5">
          <Banner />
          <Album />
          <NewtShirt />
          <HotDeal />
          <div className="xxme">
            <img
              src="https://file.hstatic.net/1000383583/file/web_e3b35522e3ba489687bdcde3e75429ab.jpg"
              width={"100%"}
            />
          </div>
          <BestSeller />
          <NewArrival />
          <News />
        </div>
        <div className={`show__PopUp ${isShowPopUp ? "active" : ""}`}>
          <img src={banner} alt="banner" />
          <div className="closePopUp" onClick={() => setIsShowPopUp(false)}>
            <IoIosClose size={25} />
          </div>
        </div>
      </motion.div>
    </Helmet>
  );
};

export default Home;
