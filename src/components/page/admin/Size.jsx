import React, { useEffect, useMemo, useState } from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import { formatDate } from "../../../libs/formatDate";
import Pagination from "../../common/pagination/Pagination";

const Size = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const handleUpdate = () => {
    console.log("update");
    toast.success("Update Success");
  };

  const handleDelete = () => {
    console.log("Delete");
    toast.success("Delete Success");
  };

  const handleUpdateCurrentPage = (page) => {
    setCurrentPage(page);
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

  const contents = useMemo(() => {
    return tableData?.object?.map((table) => {
      return {
        col1: table.id,
        col2: table.nameSize,
        col4: table.createdBy || "Nhân",
        col5: formatDate(table.createdDate) || formatDate(Date.now()),
        col6: table.isActive ? "Hoạt động" : "Đã xóa",
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
      };
    });
  }, [tableData]);

  useEffect(async () => {
    try {
      let response = await axios.get(`/size/all?page=${currentPage}&size=10`);
      console.log("check data size :>>", response);
      setTableData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);
  return (
    <div className="sizeAdmin">
      <div className="sizeAdmin__header">
        <h1>List Size</h1>
      </div>
      {tableData?.object?.length > 0 && (
        <div className="sizeAdmin__table">
          <Table data={contents} columns={columns} />
        </div>
      )}

      <Pagination
        total={tableData?.totalReturn}
        currentPage={currentPage}
        handleUpdateCurrentPage={handleUpdateCurrentPage}
      />
    </div>
  );
};

export default Size;
