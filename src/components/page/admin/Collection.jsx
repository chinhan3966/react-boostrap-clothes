import React, { useEffect, useMemo, useState } from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "../../common/pagination/Pagination";
import { formatDate } from "../../../libs/formatDate";

const Collection = () => {
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

  const contents = useMemo(() => {
    return tableData?.object?.map((table) => {
      return {
        col1: table.id,
        col2: table.categorySlug,
        col3: (
          <div>
            <img width="50px" height="50px" src={table.img[0]} />
          </div>
        ),
        col4: table.createdBy,
        col5: formatDate(table.modifiedDate),
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
      let response = await axios.get(
        `/category/all?page=${currentPage}&size=10`
      );
      console.log("check data category :>>", response);
      setTableData(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  return (
    <div className="collectionAdmin">
      <div className="collectionAdmin__header">
        <h1>List Loại Sản Phẩm</h1>
      </div>
      {tableData?.object?.length > 0 && (
        <div className="collectionAdmin__table">
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

export default Collection;
