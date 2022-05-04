import React from "react";

const data = {
  listProduct: [
    // tShirt Collection
    {
      id: 1,
      title: "saw tee",
      price: "300.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/274776962_1605705269822568_7896267717872244100_n_a2d0b84783c241109cd836d2ec22f2e4_master.jpeg",
        "https://product.hstatic.net/1000360022/product/274710363_1605705179822577_250810723808604688_n_c6108ee394204ff8abcce6810c99c852_large.jpeg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-saw-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 2,
      title: "her tee",
      price: "350.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/z3201813374545_2e87610c0c542a0fc2288b764b04e265_0c210b7ec7c84670aa0310621b5aa137_large.jpg",
        "https://product.hstatic.net/1000360022/product/z3201813378775_24dacc09dcb7c1f79ad87113fb6e6b31_258732e5c532444d9f56cc1541684a02_large.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-her-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 3,
      title: "him tee",
      price: "350.000₫",
      img: [
        "https://product.hstatic.net/1000383583/product/f5ae8e70-94a1-4a29-952a-f41dcd337b34_8cceeeec2d8d4e32aa26b05786aae94f_large.jpg",
        "https://product.hstatic.net/1000383583/product/b459e283-fd24-44b5-b41a-b67abf9f1323_2dd95207e8af43708028228ee718e248_master.png",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-him-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 4,
      title: "THE DREAM CLUB VER2 T-SHIRT ",
      price: "330.000₫",
      img: [
        "https://product.hstatic.net/1000383583/product/9fd766cb-4eaf-46a6-889d-51682ddf36c4_b91985ce3a164ae0884da6f7f315074e_large.jpg",
        "https://product.hstatic.net/1000383583/product/absolutely_den_185764853d44424a88ad114719a0146f_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-club-ver2-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 5,
      title: "black track tee",
      price: "330.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/26_ca2ba2a8f94d47c6a4a77151abea8792_large.jpg",
        "https://product.hstatic.net/1000360022/product/25_90bd69590df54193a168f7653d91a52c_large.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-black-track-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 6,
      title: "PENCIL ICON TEE",
      price: "330.000₫",
      img: [
        "https://product.hstatic.net/1000383583/product/absolutely_trang_04559652d5ed40d29ec857642574aeeb_master.jpg",
        "https://product.hstatic.net/1000383583/product/absolutely_trang1fd_69072c5dd6fa4406a62b1a9695882fc0_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-pencil-icon-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 7,
      title: "Squared Logo",
      price: "280.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/2__1__b76aa5e3baf54a849aff94d4f5ffbe69_master.jpg",
        "https://product.hstatic.net/1000360022/product/1__1__d3840ad8e64046a98c6d1b4dee31bc23_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-spuared-logo-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 8,
      title: "Skateboard",
      price: "250.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/274992612_1609445902781838_7343830436745710654_n_d7cc1e552232455085afbd9d358cda0d_master.jpeg",
        "https://product.hstatic.net/1000360022/product/274895515_1609445912781837_5029371980492420307_n_b487a15da16b4c28943ad40407f7b24e_master.jpeg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-spuared-logo-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 9,
      title: "The Astrodogs",
      price: "450.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/z3183314224701_d127bb7236e9a180a19bfa7b20b5bf2f_ec8491351082407c8afd5dddf009c4b9_master.jpg",
        "https://product.hstatic.net/1000360022/product/z3183314230582_68183a3e5a02f701bc10bcfb44b5cdbf_06c44a40ad664397bc474881fd9798a1_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-atrodog-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    {
      id: 10,
      title: "never stop",
      price: "450.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/z3189793853641_a456f62512bbe4e88845e1949a24c8e4_7cb1a44391c14dd8ba8c1f41f5da1760_master.jpg",
        "https://product.hstatic.net/1000360022/product/z3189793618725_5ba282177204185d5bb10e8350a3260e_4d90641a79e849148a706f3e14b68c93_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-never-stop-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    // tShirt Collection

    // pant Collection
    {
      id: 11,
      title: "Quần Jean Slim Trơn Dark Blue",
      price: "450.000₫",
      img: [
        "https://product.hstatic.net/1000360022/product/1_b1b53c3e3a9e443598887372f97a127d_master.jpg",
        "https://product.hstatic.net/1000360022/product/3_5fe3a60db1554e58a87527bfaf23f109_master.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-jean-slim-dark",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
    },
    // pant Collection
  ],
  listCollections: [
    {
      id: 1000,
      img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/4.png?v=1622924614140",
      categorySlug: "t-shirt",
      quanlity: "75",
    },
    {
      id: 2000,
      img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/3.png?v=1622924599443",
      categorySlug: "hoodie",
      quanlity: "35",
    },
    {
      id: 3000,
      img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753",
      categorySlug: "jacket",
      quanlity: "15",
    },
    {
      id: 4000,
      img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/1.png?v=1622924504003",
      categorySlug: "pant",
      quanlity: "25",
    },
    {
      id: 5000,
      img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/32132.png?v=1623003430463",
      categorySlug: "shirt",
      quanlity: "95",
    },
  ],
};

export default data;
