import React, { useEffect, useMemo, useState } from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import Modal from "../../common/modal/Modal";
import axios from "axios";
import Pagination from "../../common/pagination/Pagination";
import FormPostProduct from "../../common/form-admin/product/FormPostProduct";

import Loading from "../../common/loading/Loading";
import FormPutProduct from "../../common/form-admin/product/FormPutProduct";
import { useSelector } from "react-redux";
import FormPostAccount from "../../common/form-admin/account/FormPostAccount";

const Account = () => {
  const [isOpenModalPost, setIsOpenModalPost] = useState(false);
  const [isOpenModalPut, setIsOpenModalPut] = useState(false);
  const [dataPut, setDataPut] = useState({});

  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [refeshTableData, setRefeshTableData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token } = useSelector((state) => state.auth);

  const handleCloseModalPost = () => {
    setIsOpenModalPost(false);
  };

  const handleOpenModalPost = () => {
    setIsOpenModalPost(true);
  };

  const handleCloseModalPut = () => {
    setIsOpenModalPut(false);
  };

  const handleOpenModalPut = () => {
    setIsOpenModalPut(true);
  };

  const handleUpdate = (table) => {
    handleOpenModalPut();
    setDataPut(table);
  };

  // const handleDelete = async (id) => {
  //   const data = [id];
  //   // console.log("delete id :>>", data);
  //   try {
  //     let response = await axios({
  //       method: "DELETE",
  //       url: "/product",
  //       data: data,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("check response delete product :>>", response);
  //     if (response?.data?.code === 200) {
  //       toast.success(response?.data?.message);
  //       setRefeshTableData(Math.random() * 99999);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.warn("Delete fail");
  //   }
  // };

  const handleUpdateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const columns = useMemo(() => {
    return [
      {
        Header: "Id",
        accessor: "col8",
      },
      {
        Header: "First Name",
        accessor: "col1",
      },
      {
        Header: "LastName",
        accessor: "col9",
      },
      {
        Header: "Email",
        accessor: "col2",
      },
      {
        Header: "Type Account",
        accessor: "col3",
      },
      {
        Header: "Role",
        accessor: "col4",
      },
      {
        Header: "Cập nhật",
        accessor: "col6",
      },
      // {
      //   Header: "Xóa",
      //   accessor: "col7",
      // },
    ];
  }, []);

  const contents = useMemo(() => {
    return tableData?.object?.map((table) => {
      return {
        col8: table?.id,
        col1: table?.firstName,
        col9: table?.lastName,
        col2: table?.email,
        col3: table?.userGoogleId ? "Google" : "Database",
        col4: table?.role[0]?.role,
        col6: (
          <div>
            <BiEditAlt size={18} onClick={() => handleUpdate(table)} />
          </div>
        ),
        // col7: (
        //   <div>
        //     <AiOutlineDelete size={18} onClick={() => handleDelete(table.id)} />
        //   </div>
        // ),
      };
    });
  }, [tableData]);

  useEffect(async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `/account/all?page=${currentPage}&size=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("check data account :>>", response);
      if (response?.data?.object) {
        setTableData(response?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [currentPage, refeshTableData]);
  return (
    <>
      <div className="productAdmin">
        <div className="productAdmin__header">
          <h1>List Account</h1>
          <div className="header__add" onClick={handleOpenModalPost}>
            <AiOutlineAppstoreAdd size={20} />
            <h6>Thêm tk</h6>
          </div>
        </div>
        <>
          {loading ? (
            <div style={{ height: "300px" }}>
              <Loading />
            </div>
          ) : (
            <>
              {tableData?.object?.length > 0 && (
                <div className="productAdmin__table">
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
            </>
          )}
        </>
      </div>
      {isOpenModalPost && (
        <Modal
          closeModal={handleCloseModalPost}
          openModal={handleOpenModalPost}
        >
          <FormPostAccount
            handleCloseModal={handleCloseModalPost}
            setRefeshTableData={setRefeshTableData}
          />
        </Modal>
      )}

      {/* {isOpenModalPut && (
        <Modal closeModal={handleCloseModalPut} openModal={handleOpenModalPut}>
          <FormPutProduct
            handleCloseModal={handleCloseModalPut}
            setRefeshTableData={setRefeshTableData}
            dataPut={dataPut}
          />
        </Modal>
      )} */}
    </>
  );
};

export default Account;
