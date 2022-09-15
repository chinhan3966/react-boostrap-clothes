import React from "react";
import PropTypes from "prop-types";

const Helmet = ({ title, children }) => {
  document.title = `CNSHOP - ${title}`;

  // React.useEffect(() => {
  //   // window.scrollTo(0, 0);
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return <div>{children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
