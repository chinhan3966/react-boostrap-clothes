import React, { useEffect, useMemo, useState } from "react";
import Table from "../../common/table/Table";

import axios from "axios";
import { formatDate } from "../../../libs/formatDate";
import Pagination from "../../common/pagination/Pagination";
import Loading from "../../common/loading/Loading";

import { useSelector } from "react-redux";

const Bill = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const [refeshTableData, setRefeshTableData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token } = useSelector((state) => state.auth);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleUpdateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      Header: "Code",
      accessor: "col1",
    },
    {
      Header: "Email",
      accessor: "col2",
    },
    // {
    //   Header: "Hình ảnh",
    //   accessor: "col3",
    // },
    {
      Header: "Name",
      accessor: "col4",
    },
    {
      Header: "Phone",
      accessor: "col5",
    },
    {
      Header: "Order Date",
      accessor: "col6",
    },
    {
      Header: "Method Payment",
      accessor: "col7",
    },
    {
      Header: "Price",
      accessor: "col8",
    },
  ];

  const contents = useMemo(() => {
    return tableData?.object?.map((table) => {
      return {
        col1: table?.code,
        col2: `${table?.email}`,
        col4: `${table?.firstName} ${table?.lastName}`,
        col5: table?.phoneNumber,
        col6: formatDate(table?.orderDate),
        col7: table?.isOnline ? "Thanh toán Online" : "Thanh toán tại nhà",
        col8: priceSplitter(table?.totalPriceOrder),
      };
    });
  }, [tableData]);

  useEffect(async () => {
    try {
      setLoading(true);

      let response = await axios({
        method: "GET",
        url: `/order/admin/get-all-order?page=${currentPage}&size=10`,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("check data bill :>>", response);
      setTableData(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [currentPage, refeshTableData]);
  return (
    <>
      <div className="sizeAdmin">
        <div className="sizeAdmin__header">
          <h1>List Bill</h1>
          {/* <div className="header__add" onClick={handleOpenModalPost}>
            <AiOutlineAppstoreAdd size={20} />
            <h6>Thêm size</h6>
          </div> */}
        </div>

        {loading ? (
          <div style={{ height: "300px" }}>
            <Loading />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default Bill;
