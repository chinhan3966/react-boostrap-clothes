import React, { useState, useEffect, useMemo } from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "../../common/pagination/Pagination";
import { formatDate } from "../../../libs/formatDate";

const Color = () => {
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
      Header: "Tên màu",
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

  const contents = useMemo(() => {
    return tableData?.object?.map((table) => {
      return {
        col1: table.id,
        col2: table.colorName,
        col3: (
          <div
            style={{
              width: "50px",
              height: "50px",
              background: table.colorName,
            }}
          />
        ),
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
      let response = await axios.get(`/color/all?page=${currentPage}&size=10`);
      console.log("check data color :>>", response);
      setTableData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);
  return (
    <div className="colorAdmin">
      <div className="colorAdmin__header">
        <h1>List Màu</h1>
      </div>
      {tableData?.object?.length > 0 && (
        <div className="colorAdmin__table">
          <Table data={contents} columns={columns} />
        </div>
      )}

      <div className="productAdmin__pagination">
        <Pagination
          total={tableData?.totalReturn}
          currentPage={currentPage}
          handleUpdateCurrentPage={handleUpdateCurrentPage}
        />
      </div>
    </div>
  );
};

export default Color;
