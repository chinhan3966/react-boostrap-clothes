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
import axios from "axios";

import Loading from "../../common/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { handleUpdateListCart } from "../../../redux/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  const [loadingAlbum, setLoadingAlbum] = useState(true);
  const [loadingShirt, setLoadingShirt] = useState(true);
  const [loadingSeller, setLoadingSeller] = useState(true);
  const [loadingArrival, setLoadingArrival] = useState(true);

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const getAllCart = async () => {
  //   let result = await axios.get("/cart/find-cart", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   if (result?.data?.code !== 200) {
  //     toast.success("Fail get all cart", {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  //   // console.log("check all cart :>>", result);
  //   // const customListCart = result?.data?.object?.cartDetail?.map(
  //   //   (item, index) => {
  //   //     return { ...item, isActive: false };
  //   //   }
  //   // );
  //   dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
  //   // dispatch(handleUpdateListCart(customListCart));
  // };

  // useEffect(() => {
  //   getAllCart();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsShowPopUp(true);
    }, 5000);
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
          <Album setLoadingAlbum={setLoadingAlbum} />
          <NewtShirt setLoadingShirt={setLoadingShirt} />
          <HotDeal />
          <div className="xxme">
            <img
              src="https://file.hstatic.net/1000383583/file/web_e3b35522e3ba489687bdcde3e75429ab.jpg"
              width={"100%"}
            />
          </div>
          <BestSeller setLoadingSeller={setLoadingSeller} />
          <NewArrival setLoadingArrival={setLoadingArrival} />
          <News />
        </div>
        <div className={`show__PopUp ${isShowPopUp ? "active" : ""}`}>
          <div className="banner-popup">
            <Link to="/collections/t-shirt/2">
              <img src={banner} alt="banner" />
            </Link>
            <div className="closePopUp" onClick={() => setIsShowPopUp(false)}>
              <IoIosClose size={25} />
            </div>
          </div>
        </div>
        {loadingAlbum && loadingShirt && loadingSeller && loadingArrival && (
          <div className="loadingHome">
            <Loading />
          </div>
        )}
      </motion.div>
    </Helmet>
  );
};

export default Home;
