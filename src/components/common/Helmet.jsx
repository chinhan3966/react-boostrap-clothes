import React from "react";
import PropTypes from "prop-types";

const Helmet = ({ title, children }) => {
  document.title = `CNSHOP - ${title}`;

  React.useEffect(() => {
    window.scrollTo({
      top: 70,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <div>{children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
