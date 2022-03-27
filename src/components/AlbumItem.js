import React from "react";
import { Link } from "react-router-dom";
import "./AlbumItem.scss";

export const AlbumItem = ({ url, type, quanlity }) => {
  return (
    <div className="album--item">
      <Link to={`/collections/${type}`}>
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
