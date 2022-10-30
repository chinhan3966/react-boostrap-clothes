import React, { useEffect, useMemo, useState } from "react";
import Table from "../../common/table/Table";
import { AiOutlineDelete, AiOutlineAppstoreAdd } from "react-icons/ai";

import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "../../common/pagination/Pagination";
import { formatDate } from "../../../libs/formatDate";
import Loading from "../../common/loading/Loading";
import Modal from "../../common/modal/Modal";
import FormPostCategory from "../../common/form-admin/category/FormPostCategory";
import FormPutCategory from "../../common/form-admin/category/FormPutCategory";
import { useSelector } from "react-redux";

const Collection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const [isOpenModalPost, setIsOpenModalPost] = useState(false);
  const [isOpenModalPut, setIsOpenModalPut] = useState(false);
  const [dataPut, setDataPut] = useState({});

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

  const handleDelete = async (id) => {
    const data = [id];
    // console.log("delete id :>>", data);
    try {
      let response = await axios({
        method: "DELETE",
        url: "/category",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("check response delete category :>>", response);
      if (response?.data?.code === 200) {
        toast.success(response?.data?.message);
        setRefeshTableData(Math.random() * 99999);
      }
    } catch (error) {
      console.log(error);
      toast.warn("Delete fail");
    }
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
            <BiEditAlt size={18} onClick={() => handleUpdate(table)} />
          </div>
        ),
        col8: (
          <div>
            <AiOutlineDelete size={18} onClick={() => handleDelete(table.id)} />
          </div>
        ),
      };
    });
  }, [tableData]);

  useEffect(async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `/category/all?page=${currentPage}&size=10`
      );
      console.log("check data category :>>", response);
      setTableData(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [currentPage, refeshTableData]);

  return (
    <>
      <div className="collectionAdmin">
        <div className="collectionAdmin__header">
          <h1>List Loại Sản Phẩm</h1>
          <div className="header__add" onClick={handleOpenModalPost}>
            <AiOutlineAppstoreAdd size={20} />
            <h6>Thêm loại sp</h6>
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
            </>
          )}
        </>
      </div>
      {isOpenModalPost && (
        <Modal
          closeModal={handleCloseModalPost}
          openModal={handleOpenModalPost}
        >
          <FormPostCategory
            handleCloseModal={handleCloseModalPost}
            setRefeshTableData={setRefeshTableData}
          />
        </Modal>
      )}

      {isOpenModalPut && (
        <Modal closeModal={handleCloseModalPut} openModal={handleOpenModalPut}>
          <FormPutCategory
            handleCloseModal={handleCloseModalPut}
            setRefeshTableData={setRefeshTableData}
            dataPut={dataPut}
          />
        </Modal>
      )}
    </>
  );
};

export default Collection;
