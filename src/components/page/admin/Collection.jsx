import React from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const Collection = () => {
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
      Header: "Tên loại sản phẩm",
      accessor: "col2",
    },
    {
      Header: "Hình ảnh",
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
      col2: "Jacket",
      col3: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753",
      col4: "Khoa",
      col5: "14/12/2002",
      col6: "Đã xóa",
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
      col1: "1",
      col2: "Jacket",
      col3: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753",
      col4: "Khoa",
      col5: "14/12/2002",
      col6: "Đã xóa",
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
    <div className="collectionAdmin">
      <div className="collectionAdmin__header">
        <h1>List Loại Sản Phẩm</h1>
      </div>
      <div className="collectionAdmin__table">
        <Table data={contents} columns={columns} />
      </div>
    </div>
  );
};

export default Collection;
