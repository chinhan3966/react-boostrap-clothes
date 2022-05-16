import React from "react";
import Album from "../Album";
import Banner from "../Banner";
import BestSeller from "../BestSeller";
import Boostrap from "../Boostrap";
import HotDeal from "../HotDeal";
import NewArrival from "../NewArrival";
import NewtShirt from "../NewtShirt";
import News from "../News";
import Helmet from "../common/Helmet";

const Home = () => {
  return (
    <Helmet title="Home">
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
    </Helmet>
  );
};

export default Home;
