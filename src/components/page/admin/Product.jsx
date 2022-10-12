import React, { useState } from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import Modal from "../../common/modal/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const DEFAULT_OPTION = {
//   autoClose: 1000,
//   closeOnClick: true,
//   pauseOnHover: false,
//   hideProgressBar: false,
//   position: toast.POSITION.TOP_LEFT,
// };
const Product = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModalAdd(false);
  };

  const handleOpenModal = () => {
    setIsOpenModalAdd(true);
  };

  const handleUpdate = () => {
    console.log("update");
    toast.success("Update Success");
  };

  const handleDelete = () => {
    console.log("Delete");
    toast.success("Delete Success");
  };
  const columns = [
    {
      Header: "Tên sản phẩm",
      accessor: "col1",
    },
    {
      Header: "Giá sản phẩm",
      accessor: "col2",
    },
    {
      Header: "Size",
      accessor: "col3",
    },
    {
      Header: "Color",
      accessor: "col4",
    },
    {
      Header: "Số Lượng",
      accessor: "col5",
    },
    {
      Header: "Cập nhật",
      accessor: "col6",
    },
    {
      Header: "Xóa",
      accessor: "col7",
    },
  ];

  const contents = [
    {
      col1: "Xxme",
      col2: "500k",
      col3: "S,M,L",
      col4: "Black, White, Blue",
      col5: "50",
      col6: (
        <div>
          <BiEditAlt size={18} onClick={handleUpdate} />
        </div>
      ),
      col7: (
        <div>
          <AiOutlineDelete size={18} onClick={handleDelete} />
        </div>
      ),
    },
    {
      col1: "Xxme",
      col2: "500k",
      col3: "S,M,L",
      col4: "Black, White, Blue",
      col5: "50",
      col6: (
        <div>
          <BiEditAlt size={18} onClick={handleUpdate} />
        </div>
      ),
      col7: (
        <div>
          <AiOutlineDelete size={18} onClick={handleDelete} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="productAdmin">
        <div className="productAdmin__header">
          <h1>List Sản Phẩm</h1>
          <div className="header__add" onClick={handleOpenModal}>
            <AiOutlineAppstoreAdd size={20} />
            <h6>Thêm sản phẩm</h6>
          </div>
        </div>
        <div className="productAdmin__table">
          <Table data={contents} columns={columns} />
        </div>
      </div>
      {isOpenModalAdd && (
        <Modal closeModal={handleCloseModal} openModal={handleOpenModal}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Product;
