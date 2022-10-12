import React from "react";
import { IoIosClose } from "react-icons/io";
// import "./modal.scss";

const Modal = ({ children, closeModal, openModal }) => {
  return (
    <div className="popUp" onClick={closeModal}>
      <div
        className="popUp__body"
        onClick={(e) => {
          openModal();
          e.stopPropagation();
        }}
      >
        {children}
        <div
          className="iconClose__modal"
          onClick={(e) => {
            closeModal();
            e.stopPropagation();
          }}
        >
          <IoIosClose size={25} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
