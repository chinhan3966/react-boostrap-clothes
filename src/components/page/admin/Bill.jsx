import React from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const Bill = () => {
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
      Header: "Mã Bill",
      accessor: "col1",
    },
    {
      Header: "Tên khách hàng",
      accessor: "col2",
    },
    {
      Header: "Thông tin sản phẩm",
      accessor: "col3",
    },
    {
      Header: "Người tạo",
      accessor: "col4",
    },
    {
      Header: "Ngày tạo",
      accessor: "col5",
    },
    {
      Header: "Tổng bill",
      accessor: "col6",
    },
    {
      Header: "Cập nhật",
      accessor: "col7",
    },
    {
      Header: "Xóa",
      accessor: "col8",
    },
  ];

  const contents = [
    {
      col1: "#46838gb",
      col2: "Chí Nhân",
      col3: "Her Tee XXME",
      col4: "Khoa",
      col5: "14/12/2002",
      col6: "1900k",
      col7: (
        <div>
          <BiEditAlt size={18} onClick={handleUpdate} />
        </div>
      ),
      col8: (
        <div>
          <AiOutlineDelete size={18} onClick={handleDelete} />
        </div>
      ),
    },
    {
      col1: "#46nve8b",
      col2: "Trúc Vệ",
      col3: "Black Tee XXME",
      col4: "Khoa",
      col5: "14/12/2002",
      col6: "7900k",
      col7: (
        <div>
          <BiEditAlt size={18} onClick={handleUpdate} />
        </div>
      ),
      col8: (
        <div>
          <AiOutlineDelete size={18} onClick={handleDelete} />
        </div>
      ),
    },
  ];
  return (
    <div className="billAdmin">
      <div className="billAdmin__header">
        <h1>List Bill</h1>
      </div>
      <div className="billAdmin__table">
        <Table data={contents} columns={columns} />
      </div>
    </div>
  );
};

export default Bill;