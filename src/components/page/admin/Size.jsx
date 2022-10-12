import React from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const Size = () => {
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
      Header: "Id",
      accessor: "col1",
    },
    {
      Header: "Tên size",
      accessor: "col2",
    },
    // {
    //   Header: "Hình ảnh",
    //   accessor: "col3",
    // },
    {
      Header: "Người tạo",
      accessor: "col4",
    },
    {
      Header: "Ngày tạo",
      accessor: "col5",
    },
    {
      Header: "Trạng thái",
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
      col1: "1",
      col2: "L",
      // col3: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753",
      col4: "Khoa",
      col5: "14/12/2002",
      col6: "Hoạt động",
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
      col1: "2",
      col2: "XL",
      // col3: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753",
      col4: "Khoa",
      col5: "14/12/2002",
      col6: "Hoạt động",
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
    <div className="sizeAdmin">
      <div className="sizeAdmin__header">
        <h1>List Size</h1>
      </div>
      <div className="sizeAdmin__table">
        <Table data={contents} columns={columns} />
      </div>
    </div>
  );
};

export default Size;
