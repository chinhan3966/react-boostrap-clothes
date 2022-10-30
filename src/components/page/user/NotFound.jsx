import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <div className="notFound__wrapper">
        <div className="notFound__img">
          <img src="https://lh3.googleusercontent.com/XgEwa2HvKXekl8B_ZtYa45fM17dXbHLeQpUS9DP9wLzVNuVry88JZt00ZcVTGdIXG9c-2EpW1OYG1FOTgA=rw" />
        </div>
        <h1>Trang bạn tìm kiếm không tồn tại</h1>
        <button onClick={() => navigate("/")}>Quay về trang chủ</button>
      </div>
    </div>
  );
};

export default NotFound;
