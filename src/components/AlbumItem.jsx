import React from "react";
import { Link } from "react-router-dom";

export const AlbumItem = ({ url, type, quanlity, id }) => {
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="album--item" onClick={handleOntop}>
      <Link to={`/collections/${type}/${id}`}>
        <img className="album--img" src={url} />
        <div className="album--quanlity">
          <h6>
            {type}
            <span>{quanlity}</span>
          </h6>
        </div>
      </Link>
    </div>
  );
};
