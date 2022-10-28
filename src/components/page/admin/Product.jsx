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

const Product = () => {
  const [isOpenModalPost, setIsOpenModalPost] = useState(false);
  const [isOpenModalPut, setIsOpenModalPut] = useState(false);
  const [dataPut, setDataPut] = useState({});

  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [refeshTableData, setRefeshTableData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      let response = await axios.delete("/product", { data: data });
      console.log("check response delete product :>>", response);
      if (response?.data?.code === 200) {
        toast.success(response?.data?.message);
        setRefeshTableData(Math.random() * 99999);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        Header: "Tên sản phẩm",
        accessor: "col1",
      },
      {
        Header: "Hình ảnh",
        accessor: "col9",
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
  }, []);

  const contents = useMemo(() => {
    return tableData?.object?.map((table) => {
      return {
        col8: table.id,
        col1: table.title,
        col9: (
          <div>
            <img width="50px" height="50px" src={table.img[0]} />
          </div>
        ),
        col2: table.price,
        // col3: "S,M",
        col3: (function () {
          let filter = [];
          table?.infoProduct?.forEach((item) => {
            if (!filter.includes(item?.size?.sizeName)) {
              filter.push(item?.size?.sizeName);
            }
          });
          // return filter.sort((a, b) => a?.localeCompare(b)).toString();
          return filter?.map((item, index) => <span key={index}>{item} </span>);
        })(),
        col4: (function () {
          let filter = [];
          table?.infoProduct?.forEach((item) => {
            if (!filter.includes(item?.color?.colorName)) {
              filter.push(item?.color?.colorName);
            }
          });
          // return filter.sort((a, b) => a?.localeCompare(b)).toString();
          return filter?.map((item, index) => <span key={index}>{item} </span>);
        })(),
        col5: (function () {
          let totalAmount = 0;
          table?.infoProduct?.forEach((item) => {
            totalAmount += item.amount;
          });
          return totalAmount;
        })(),
        col6: (
          <div>
            <BiEditAlt size={18} onClick={() => handleUpdate(table)} />
          </div>
        ),
        col7: (
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
        `/product/all?page=${currentPage}&size=10`
      );
      // console.log("check data product :>>", response);
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
          <h1>List Sản Phẩm</h1>
          <div className="header__add" onClick={handleOpenModalPost}>
            <AiOutlineAppstoreAdd size={20} />
            <h6>Thêm sp</h6>
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
          <FormPostProduct
            handleCloseModal={handleCloseModalPost}
            setRefeshTableData={setRefeshTableData}
          />
        </Modal>
      )}

      {isOpenModalPut && (
        <Modal closeModal={handleCloseModalPut} openModal={handleOpenModalPut}>
          <FormPutProduct
            handleCloseModal={handleCloseModalPut}
            setRefeshTableData={setRefeshTableData}
            dataPut={dataPut}
          />
        </Modal>
      )}
    </>
  );
};

export default Product;
