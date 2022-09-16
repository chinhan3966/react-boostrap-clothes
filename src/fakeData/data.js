import React from "react";

const data = {
  listProduct: [
    // tShirt Collection
    {
      id: 1,
      title: "saw tee",
      price: 300000,
      img: [
        "https://product.hstatic.net/1000360022/product/274776962_1605705269822568_7896267717872244100_n_a2d0b84783c241109cd836d2ec22f2e4_master.jpeg",
        "https://product.hstatic.net/1000360022/product/274710363_1605705179822577_250810723808604688_n_c6108ee394204ff8abcce6810c99c852_large.jpeg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-saw-tee",
      size: ["s", "m", "l", "xl"],
      colors: ["white", "red"],
      discount: 10,
    },
    {
      id: 2,
      title: "her tee",
      price: 250000,
      img: [
        "https://product.hstatic.net/1000360022/product/z3201813374545_2e87610c0c542a0fc2288b764b04e265_0c210b7ec7c84670aa0310621b5aa137_large.jpg",
        "https://product.hstatic.net/1000360022/product/z3201813378775_24dacc09dcb7c1f79ad87113fb6e6b31_258732e5c532444d9f56cc1541684a02_large.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-her-tee",
      size: ["s", "m"],
      colors: ["white", "blue"],
      discount: 20,
    },
    {
      id: 3,
      title: "him tee",
      price: 355000,
      img: [
        "https://product.hstatic.net/1000383583/product/f5ae8e70-94a1-4a29-952a-f41dcd337b34_8cceeeec2d8d4e32aa26b05786aae94f_large.jpg",
        "https://product.hstatic.net/1000383583/product/b459e283-fd24-44b5-b41a-b67abf9f1323_2dd95207e8af43708028228ee718e248_master.png",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-him-tee",
      size: ["m", "l"],
      colors: ["orange", "blue"],
      discount: 10,
    },
    {
      id: 4,
      title: "THE DREAM CLUB VER2 T-SHIRT ",
      price: 330000,
      img: [
        "https://product.hstatic.net/1000383583/product/9fd766cb-4eaf-46a6-889d-51682ddf36c4_b91985ce3a164ae0884da6f7f315074e_large.jpg",
        "https://product.hstatic.net/1000383583/product/absolutely_den_185764853d44424a88ad114719a0146f_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-club-ver2-tee",
      size: ["s", "l"],
      colors: ["white", "orange", "blue"],
      discount: 30,
    },
    {
      id: 5,
      title: "black track tee",
      price: 330000,
      img: [
        "https://product.hstatic.net/1000360022/product/26_ca2ba2a8f94d47c6a4a77151abea8792_large.jpg",
        "https://product.hstatic.net/1000360022/product/25_90bd69590df54193a168f7653d91a52c_large.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-black-track-tee",
      size: ["s", "m", "l", "xl"],
      colors: ["white", "red"],
      discount: 11.8,
    },
    {
      id: 6,
      title: "PENCIL ICON TEE",
      price: 330000,
      img: [
        "https://product.hstatic.net/1000383583/product/absolutely_trang_04559652d5ed40d29ec857642574aeeb_master.jpg",
        "https://product.hstatic.net/1000383583/product/absolutely_trang1fd_69072c5dd6fa4406a62b1a9695882fc0_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-pencil-icon-tee",
      size: ["s", "m", "l", "xxl"],
      colors: ["white"],
      discount: 10,
    },
    {
      id: 7,
      title: "Squared Logo",
      price: 280000,
      img: [
        "https://product.hstatic.net/1000360022/product/2__1__b76aa5e3baf54a849aff94d4f5ffbe69_master.jpg",
        "https://product.hstatic.net/1000360022/product/1__1__d3840ad8e64046a98c6d1b4dee31bc23_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-spuared-logo-tee",
      size: ["s", "m", "l", "xl"],
      colors: ["white"],
      discount: 10,
    },
    {
      id: 8,
      title: "Skateboard",
      price: 250000,
      img: [
        "https://product.hstatic.net/1000360022/product/274992612_1609445902781838_7343830436745710654_n_d7cc1e552232455085afbd9d358cda0d_master.jpeg",
        "https://product.hstatic.net/1000360022/product/274895515_1609445912781837_5029371980492420307_n_b487a15da16b4c28943ad40407f7b24e_master.jpeg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-spuared-logo-tee",
      size: ["l"],
      colors: ["white", "blue"],
      discount: 30,
    },
    {
      id: 9,
      title: "The Astrodogs",
      price: 450000,
      img: [
        "https://product.hstatic.net/1000360022/product/z3183314224701_d127bb7236e9a180a19bfa7b20b5bf2f_ec8491351082407c8afd5dddf009c4b9_master.jpg",
        "https://product.hstatic.net/1000360022/product/z3183314230582_68183a3e5a02f701bc10bcfb44b5cdbf_06c44a40ad664397bc474881fd9798a1_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-atrodog-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
      discount: 1.2,
    },
    {
      id: 10,
      title: "never stop",
      price: 450000,
      img: [
        "https://product.hstatic.net/1000360022/product/z3189793853641_a456f62512bbe4e88845e1949a24c8e4_7cb1a44391c14dd8ba8c1f41f5da1760_master.jpg",
        "https://product.hstatic.net/1000360022/product/z3189793618725_5ba282177204185d5bb10e8350a3260e_4d90641a79e849148a706f3e14b68c93_master.jpg",
      ],
      categorySlug: "t-shirt",
      slug: "t-shirt-never-stop-tee",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
      discount: 10,
    },
    // tShirt Collection

    // pant Collection
    {
      id: 11,
      title: "Quần Jean Slim Trơn Dark Blue",
      price: 450000,
      img: [
        "https://product.hstatic.net/1000360022/product/1_b1b53c3e3a9e443598887372f97a127d_master.jpg",
        "https://product.hstatic.net/1000360022/product/3_5fe3a60db1554e58a87527bfaf23f109_master.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-jean-slim-dark",
      size: ["s", "m", "l"],
      colors: ["white", "red", "orange", "blue"],
      discount: 40,
    },
    {
      id: 12,
      title: "CARGO SWEATPANTS",
      price: 400000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/279131219-5022081387900002-7024246967289365973-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/279168954-5022081607899980-7091060892217135260-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/279135127-5022081547899986-2646654350275862738-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-sweat-cargo",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 40,
    },
    {
      id: 13,
      title: "BASIC SWEATPANTS",
      price: 550000,
      img: [
        "https://bizweb.dktcdn.net/100/331/067/products/277221088-4942261519215323-2288861619844650903-n.jpg?v=1648031979787",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277245534-4942261692548639-1280414192999771683-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277296183-4942261652548643-7751799429083711931-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-sweat-basic",
      size: ["s", "m", "l"],
      colors: ["black", "gray", "yellow"],
      discount: 40,
    },
    {
      id: 14,
      title: "YOUNG GREEN SHORT",
      price: 300000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/275691882-2189077947914542-7800085332450024811-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/275584102-2189078001247870-2134486335487095774-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/275620566-2189078087914528-2856849479653652731-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-young-short",
      size: ["s", "m", "l"],
      colors: ["black", "gray"],
      discount: 40,
    },
    {
      id: 15,
      title: "BLANK SHORTS",
      price: 200000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277806721-2206406732848330-2206895219040895551-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277812560-2206406442848359-267516296384933623-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277790753-2206406426181694-2677015051587986469-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277800658-2206406672848336-8811939047511031239-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-blank-short",
      size: ["s", "m", "l"],
      colors: ["black", "gray", "yellow"],
      discount: 40,
    },
    {
      id: 16,
      title: "RELAXED FIT JEANS",
      price: 450000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277296689-4942260522548756-8116451636709013432-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277569539-2203863909769279-2029875020081129763-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277248844-2203863969769273-2410311621172422945-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277243958-4942260579215417-103521759669503273-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-relaxed-jean",
      size: ["s", "m", "l"],
      colors: ["blue", "white"],
      discount: 30,
    },
    {
      id: 17,
      title: "YG NYLON SHORTS",
      price: 250000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/176821199-3916849545089864-3995459893466709246-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/178856238-3916850071756478-4538773011491884602-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/176334586-3916849768423175-7761005563603052997-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/178687227-3916848991756586-435535543363056399-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-nylon-short",
      size: ["s", "m", "l"],
      colors: ["blue", "white", "purple", "black"],
      discount: 30,
    },
    {
      id: 18,
      title: "DRAWSTRING LONG",
      price: 260000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/285985895-5138122599629213-3636237988340924545-n.jpg?v=1655035363670",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/286026754-5138122469629226-1971205653048139783-n.jpg?v=1661445246307",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/285901707-5138122619629211-7003163971192127543-n.jpg?v=1661445246307",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/285941083-5138122499629223-3339639520142156551-n.jpg?v=1655035363670",
      ],
      categorySlug: "pant",
      slug: "pant-drawstring-short",
      size: ["s", "m", "l"],
      colors: ["gray", "black"],
      discount: 30,
    },
    {
      id: 19,
      title: "Super Cargo Ref",
      price: 160000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/78399516-602304613905010-937047639331962880-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/79726550-561352438016333-2308735562313367552-n.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-super-cargo",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 20,
      title: "Denim Indigo Waxed Zipper",
      price: 240000,
      img: [
        "https://product.hstatic.net/1000383583/product/b5d0076c-3597-4480-a2c7-f0290b053307_6d7fe42d67644bc0966cdbb7d3166368_master.jpg",
        "https://product.hstatic.net/1000383583/product/4300a0ce-6e2f-48b7-ab56-bbbf3288bd4e_1164d5a79e2a4018af0ca3f70a0767db_master.jpg",
        "https://product.hstatic.net/1000383583/product/46d579df-398c-41e1-848f-e21226d654b6_5eeea7657e3b4a0eb36325abe5dd5ee6_master.jpg",
        "https://product.hstatic.net/1000383583/product/cdfd65cc-a11e-48af-9e6a-00e746502b0a_6f04ed759b7041778a99969f140df0bd_master.jpg",
        "https://product.hstatic.net/1000383583/product/07684733-0bf7-4829-bd66-4d55fda69b71_7a778e14d83e48d49f4e7aef9096f27e_master.jpg",
      ],
      categorySlug: "pant",
      slug: "pant-denim-zipper",
      size: ["s", "m", "l"],
      colors: ["blue"],
      discount: 30,
    },
    // pant Collection

    //hoodie Collection
    {
      id: 21,
      title: "POLO SWEATSHIRT",
      price: 440000,
      img: [
        "https://bizweb.dktcdn.net/100/331/067/products/275610014-4910649805709828-8462384243312509690-n.jpg?v=1646984166393",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/275561580-4910650335709775-1867798913020409848-n.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-polo-sweat",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 22,
      title: "HOOD GOOD COLLECTION",
      price: 480000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277704631-2203863169769353-6508099726737752617-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277703608-2203863186436018-884434871662358275-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/277229267-2203863359769334-3679143780844481776-n.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-hood-good",
      size: ["s", "m", "l"],
      colors: ["black", "green", "blue"],
      discount: 30,
    },
    {
      id: 23,
      title: "VINTAGE WASHED SWEATER",
      price: 380000,
      img: [
        "https://bizweb.dktcdn.net/100/331/067/products/260347957-4540557039385775-6518342986374684206-n.jpg?v=1637667617337",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/259515075-4540557342719078-3271426454638419611-n.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-vintage-washed",
      size: ["s", "m", "l"],
      colors: ["gray"],
      discount: 30,
    },
    {
      id: 24,
      title: "BASIC SWEATSHIRT OG",
      price: 3550000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/249687331-4478030878971725-2834523765453833703-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/249386736-4478031955638284-8366876910270352043-n.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-basic-og",
      size: ["s", "m", "l"],
      colors: ["gray"],
      discount: 30,
    },
    {
      id: 25,
      title: "VGS White Reflective",
      price: 4550000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/81670678-2454485991460390-736862172897869824-o.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/81726477-2454486364793686-6077712739151642624-o.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/81032601-2653196428121855-7255143487518015488-o.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/81715729-2653196131455218-2295625316376248320-o.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-vgs-reflective",
      size: ["s", "m", "l"],
      colors: ["white"],
      discount: 30,
    },
    {
      id: 26,
      title: "X2 Monogram Hoodie - Beige",
      price: 470000,
      img: [
        "https://product.hstatic.net/1000383583/product/dsc_8068_bf34dc8a2d5d45119e4dbc873c977c22_master.jpg",
        "https://product.hstatic.net/1000383583/product/dsc_8069_fa0bb4f830a941689d8df045934fba21_master.jpg",
        "https://product.hstatic.net/1000383583/product/z3340459200748_d3578062a1b23c8ac12e5259e1e0b4ce_3e7eb1398c2a412ba9d564f5af551606_master.jpg",
        "https://product.hstatic.net/1000383583/product/z3340459123735_fef5cbc06eb6bddf8c5743a9e4311e21_e9ec46b3e64147639e6c32119d84a92a_master.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-x2-monogra",
      size: ["s", "m", "l"],
      colors: ["yellow"],
      discount: 30,
    },

    {
      id: 27,
      title: "Blur Hoodie - Red",
      price: 470000,
      img: [
        "https://product.hstatic.net/1000383583/product/hd7_fb_e2aa244e22454eb7b8670e42e40866cd_master.jpg",
        "https://product.hstatic.net/1000383583/product/hd8_fb_9ba0e985da704f33b85a26ee91f586e1_master.jpg",
        "https://product.hstatic.net/1000383583/product/_ca10173_fb_11a184e19db742ffb7b66f5c57eb5fc5_master.jpg",
        "https://product.hstatic.net/1000383583/product/_ca10175_fb_c3dc689f78474de3b8c6cfd5cd5edc43_master.jpg",
        "https://product.hstatic.net/1000383583/product/_ca10179_fb_864308b383c54d13b011c1b8cabb3964_master.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-blur-red",
      size: ["s", "m", "l"],
      colors: ["red"],
      discount: 30,
    },
    {
      id: 28,
      title: "Hoodie All About Basic",
      price: 400000,
      img: [
        "https://product.hstatic.net/1000360022/product/1_b019968cff2e4132945604eab8bace17_master.jpg",
        "https://product.hstatic.net/1000360022/product/3_120baed648554d65aefac588e091ef6a_master.jpg",
        "https://product.hstatic.net/1000360022/product/4_a2eaaa7d27d54062920d7f1c39b7a3b4_master.jpg",
        "https://product.hstatic.net/1000360022/product/5-1_dcc8b3ab642f4a1f91bff514895607af_master.jpg",
        "https://product.hstatic.net/1000360022/product/7_bc911aa2c318479aa8ffee7ccd31840b_master.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-all-about",
      size: ["s", "m", "l"],
      colors: ["black", "white", "yellow"],
      discount: 30,
    },
    {
      id: 29,
      title: "Hoodie What A Good Artist",
      price: 135000,
      img: [
        "https://product.hstatic.net/1000360022/product/2_f31aa5ec777d4bda824c584ce4b56446_master.jpg",
        "https://product.hstatic.net/1000360022/product/3_d2d3150091e54020b52d3135ba0dbdef_master.jpg",
        "https://product.hstatic.net/1000360022/product/13_9f9330cccbee4d21be5f436a835236fa_master.jpg",
        "https://product.hstatic.net/1000360022/product/5_4d27f561187f4fc48fe5b0d4364e481f_master.jpg",
        "https://product.hstatic.net/1000360022/product/9_e376d882a671466399782ab5c0274f8b_master.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-what-good-artist",
      size: ["s", "m", "l"],
      colors: ["black", "white"],
      discount: 50,
    },
    {
      id: 30,
      title: "Hoodie All Black W Utility Pockets",
      price: 315000,
      img: [
        "https://product.hstatic.net/1000360022/product/2_d6e728e630974cdfae781d83aa17e888_master.jpg",
        "https://product.hstatic.net/1000360022/product/1_26ddf633249e476b8f3eca991f833999_master.jpg",
        "https://product.hstatic.net/1000360022/product/12_891df47c56d340e1b53e8795818d20e9_master.jpg",
        "https://product.hstatic.net/1000360022/product/9_a96e5d2b40934307afd160fce997886a_master.jpg",
        "https://product.hstatic.net/1000360022/product/8_1a0b957424bf42f7b8b1297ef903349a_master.jpg",
      ],
      categorySlug: "hoodie",
      slug: "hoodie-all-untity-pocket",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 20,
    },
    //hoodie Collection

    //jacket Collection
    {
      id: 31,
      title: "THE DREAM CLUB JACKET",
      price: 365000,
      img: [
        "https://bizweb.dktcdn.net/100/331/067/products/38.png?v=1648407433137",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/38.png",
      ],
      categorySlug: "jacket",
      slug: "jacket-dream-club",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 20,
    },
    {
      id: 32,
      title: "ICON VARSITY JACKET",
      price: 550000,
      img: [
        "https://bizweb.dktcdn.net/100/331/067/products/275555051-4902883253153150-2857847874159411039-n.jpg?v=1646734716690",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/275378750-4902883346486474-6435197510501594516-n.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-icon-varsity",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 33,
      title: "VGS VARSITY JACKET",
      price: 600000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/e83a172e11e4dcba85f5.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/507b65dc54169948c007.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/ab26ea24ecee21b078ff.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-vgs-varsity",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 34,
      title: "FACE MARCUS VARSITY JACKET",
      price: 680000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/272155350-2150308565124814-8838515312815814223-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/272061166-2150308585124812-8295422528404826292-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/271990053-2150308691791468-1295395622069218302-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/272016822-2150308655124805-8975480729527101054-n.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-face-varsity",
      size: ["s", "m", "l"],
      colors: ["red"],
      discount: 30,
    },
    {
      id: 35,
      title: "SUEDE BOMBER JACKET",
      price: 650000,
      img: [
        "https://bizweb.dktcdn.net/100/331/067/products/cc9bcae255c99897c1d8.jpg?v=1642320011060",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/bc6f00e890c35d9d04d2.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-suede-bomber",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 36,
      title: "YOUNGGREEN BASIC JACKET",
      price: 180000,
      img: [
        "https://product.hstatic.net/1000383583/product/0a391fea-c373-4a85-bc3c-6aeba12af8ef_c94a74a8ba26462a96f1274fccfbf9d4_master.jpg",
        "https://product.hstatic.net/1000383583/product/26a9c0de-e7a6-4bdd-9ac5-fef67c481a83_7376c5bd67124543812538e78d9d1127_master.jpg",
        "https://product.hstatic.net/1000383583/product/e7286d6d-52df-4ea9-8114-26eb121cf999_8daf5406f64b4ab3ac089ea27ca35395_master.jpg",
        "https://product.hstatic.net/1000383583/product/1a1b4387-cc57-466f-b0be-f65acf0f5ec5_acfde6b70033494eab06b521081204f0_master.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-younggreen-basic",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 37,
      title: "ESSENTIAL REF JACKET",
      price: 380000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/7289ec46ca903ace6381.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/4a948add480ab854e11b.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/123691737-414156922932373-2061267119590616985-n.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-essential-ref",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 38,
      title: "Essential Jacket",
      price: 350000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/78573664-979323722401069-2717228840979005440-n.png",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/78546040-2592886364136911-7780778047812141056-n.png",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/78284343-706171829906428-7216947578850508800-n.png",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/78263620-1478283788993965-8254498200233181184-o.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-essential-basic",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 39,
      title: "LOGO SS/21 JACKET",
      price: 180000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/165554202-3834384780003008-7710422561336856453-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/166946483-3834384383336381-3936968415946180476-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/165780223-3834401393334680-4131333102953648251-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/197522299-4083241441784006-1823143058336625285-n.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-logo-ss21",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 30,
    },
    {
      id: 40,
      title: "[YG] Coach Hoodie",
      price: 480000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/0l6a1592-3005c898-f401-44df-831b-8ac78bb1876f.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/56340141-2130926100355222-8810688175778299904-n-a70bbab2-2e58-4b10-bb9e-a0d853ab2428.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/7-02db71f2-28b8-4af4-9cd4-4ffdf9bf7575.jpg",
      ],
      categorySlug: "jacket",
      slug: "jacket-coach",
      size: ["s", "m", "l", "xl"],
      colors: ["black"],
      discount: 30,
    },
    //jacket Collection

    //accessories Collection
    {
      id: 41,
      title: "YG BACKPACK VER1",
      price: 350000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/164287237-3834384680003018-4842203242794152591-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/156803546-1902074766614863-8537003949908188374-o.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-yg-ver1",
      colors: ["black"],
      discount: 30,
    },
    {
      id: 42,
      title: "MINI BAG SSO2",
      price: 190000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/259544751-4540556569385822-7637436739056613036-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/e714d4c66fc23e7d3736d203520a7784.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/259390689-4540557156052430-2192535643989191993-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/259488241-4540557036052442-7644239890519033736-n.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-mini-ss02",
      colors: ["black"],
      discount: 50,
    },
    {
      id: 43,
      title: "YG Shoulder Bag",
      price: 260000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/106802323-522173951810207-5608440616358559873-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/106206584-1679402502215425-2885094616082793613-o.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/106780583-299783634482938-8247745337005061593-n.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-shouder-bag",
      colors: ["black"],
      discount: 40,
    },
    {
      id: 44,
      title: "Leather Backpack Box",
      price: 260000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/74605555-954261871605205-1133623748394483712-n.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/76175061-991310931209463-8467673176778735616-n.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-leather-bagpack",
      colors: ["black"],
      discount: 40,
    },
    {
      id: 45,
      title: "Pearls Glasses",
      price: 130000,
      img: [
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/76642394-1455827834572894-6741015084480331776-o.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/75327082-1455827847906226-341504484771364864-o.jpg",
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/75339508-1455828221239522-8817348875485446144-o.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-glass-pearl",
      colors: ["black", "yellow", "gray"],
      discount: 40,
    },
    {
      id: 46,
      title: "x2 monogram cap",
      price: 190000,
      img: [
        "https://product.hstatic.net/1000383583/product/_ca17115_fb_e1257db0609948baabb66bb4f0b62e60_master.jpg",
        "https://product.hstatic.net/1000383583/product/_ca17116_fb_0029ae6365044ef1bd0e6a6a83d12d79_master.jpg",
        "https://product.hstatic.net/1000383583/product/_ca17119_fb_fcea446b333b49bfbcb9b3695d5dc1b4_master.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-cap-monogram",
      colors: ["yellow"],
      discount: 40,
    },
    {
      id: 47,
      title: "SLC Backpack",
      price: 490000,
      img: [
        "https://product.hstatic.net/1000383583/product/64a2f32c-644f-4bc0-9902-f579312d3a2d_b4caec5519284b9a933b3f40106e249c_master.jpg",
        "https://product.hstatic.net/1000383583/product/1ab3ed3c-9a50-4522-b2ab-a03099da05ad_0f8e690832ad412f8e77dfbb40b28404_master.jpg",
        "https://product.hstatic.net/1000383583/product/fc1587a7-157b-4cbb-9a9d-bacc4f56a8e5_6f90df4919d6452a850677607813abf9_master.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-backpack-slc",
      colors: ["black"],
      discount: 40,
    },
    {
      id: 48,
      title: "Aviator Light-Frame",
      price: 380000,
      img: [
        "https://product.hstatic.net/1000360022/product/img_0786_7621fe343f774ef6a0167d08c3cf835f_master.jpg",
        "https://product.hstatic.net/1000360022/product/img_1166_ed544316ee9347c9adf07e961a0a7285_master.jpg",
        "https://product.hstatic.net/1000360022/product/img_1158_0357f6966d614c03866b25422fbbba8e_master.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-aviator-frame",
      colors: ["black"],
      discount: 40,
    },
    {
      id: 49,
      title: "CANVAS WALLET ORIGINAL",
      price: 140000,
      img: [
        "https://product.hstatic.net/1000281824/product/bb7f6b14-5046-43f0-8510-a88f5d519f18_95097a97408d4262bf119a402a2eaf16_grande.jpeg",
        "https://product.hstatic.net/1000281824/product/203765d9-31d8-4fdd-937d-b814560ee582_d3fd2666150841088ee687bbd6978ff4_grande.jpeg",
        "https://product.hstatic.net/1000281824/product/8cf78998-0f47-4288-ab0b-1a8077a50fd3_5d5742c3822f4c519a5499fa82698094_grande.jpeg",
      ],
      categorySlug: "accessories",
      slug: "accessories-wallet-canvas",
      colors: ["black"],
      discount: 40,
    },
    {
      id: 50,
      title: "LONG WALLET - BLACK",
      price: 350000,
      img: [
        "https://files.halozend.net/file/5thewayDrivePublic/2021/11/T2RfdtSjfhbT0EoQJykAeXbNLADhcPL2t5xRw1b4.jpg",
        "https://files.halozend.net/file/5thewayDrivePublic/2021/11/0vfR2Puv8H526UeI5q57qHuo8qMBhV4y7aNbfPi6.jpg",
        "https://files.halozend.net/file/5thewayDrivePublic/2021/11/5T2ADeM25hBmj5CplJhuZqxyQmBYtKDYhz8RBWPF.jpg",
        "https://files.halozend.net/file/5thewayDrivePublic/2021/11/sTSUm8KNAo1MUtckYDBpO6vLlyGJ8gQkRwMy8HEp.jpg",
      ],
      categorySlug: "accessories",
      slug: "accessories-wallet-long",
      colors: ["black"],
      discount: 40,
    },
    //accessories Collection

    //shirt Collection
    {
      id: 51,
      title: "X2 Monogram Shirt - White",
      price: 450000,
      img: [
        "https://product.hstatic.net/1000383583/product/dsc_9799_e50904dfce9e418093b99dd14f2034c5_master.jpg",
        "https://product.hstatic.net/1000383583/product/dsc_9801_cdcae228d2d24cafbc02d6633a113c78_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "X2-Monogram-Shirt-White",
      size: ["s", "m", "l"],
      colors: ["white"],
      discount: 20,
    },
    {
      id: 52,
      title: "GOD 17",
      price: 220000,
      img: [
        "https://product.hstatic.net/200000239547/product/mat_truoc_a7fca4bdae644edb9e92bd91e0f4b3c6_compact.jpg",
        "https://product.hstatic.net/200000239547/product/mat_sau_8c45aa3edc59465c927ba63860591967_compact.jpg",
        "https://product.hstatic.net/200000239547/product/2_b306fd1ada8c432abd6acf8625abc4e7_compact.jpg",
        "https://product.hstatic.net/200000239547/product/3_70ed2ffe22564a2b91aaa381aeb4bd60_compact.jpg",
      ],
      categorySlug: "shirt",
      slug: "god-17",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 10,
    },
    {
      id: 53,
      title: "Cosmos Shirt",
      price: 225000,
      img: [
        "https://product.hstatic.net/1000383583/product/sm_583168fbed7a4540ab22d21f741e38af_master.jpg",
        "https://product.hstatic.net/1000383583/product/fc5b2cd2-87a0-4d59-b665-b55e280e22cb_451cc336ebcb4ec9b750d59304301bb7_master.jpg",
        "https://product.hstatic.net/1000383583/product/0bafdd44-0a13-47ba-91b6-2f0e2d5fbe62_51edf639d00046868a68b7f2e262af84_master.jpg",
        "https://product.hstatic.net/1000383583/product/3429fa2a-0a27-4b87-af23-ae1ae10d0920_1f7be877fdeb4acab2fe3f4eedf457ed_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "cosmos-shirt",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 10,
    },
    {
      id: 54,
      title: "Yellow - Tie dye Shirt - Phản quang cầu vồng",
      price: 210000,
      img: [
        "https://product.hstatic.net/1000383583/product/z3308070017561_d7fe11ea1aa091e3f8c5c9d455e376e8_6dca5a8ee074479c94dfa7df13ab9812_master.jpg",
        "https://product.hstatic.net/1000383583/product/fc7d154d-0e05-4510-9bc5-b5a43a1c7193_968c32f543424750885fc91340a3f048_master.png",
        "https://product.hstatic.net/1000383583/product/4d2473cc-56f3-4f2a-a06c-7f7abb776dca_d557e708054345f389ff34575bcbf052_master.jpg",
        "https://product.hstatic.net/1000383583/product/901a40dc-7c28-4372-b491-ed7242682088_717bc76f36684638b19ca7990c9e1868_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "tie-dye-shirt",
      size: ["s", "m", "l"],
      colors: ["gray", "black"],
      discount: 10,
    },
    {
      id: 55,
      title: "Holy Roman Shirt",
      price: 210000,
      img: [
        "https://product.hstatic.net/1000383583/product/62d3f21f-0263-4a34-a344-94419eb3e995_571c839fcfb94a31a176727df2bc119c_master.jpg",
        "https://product.hstatic.net/1000383583/product/a2d9d408-0725-4bcf-b6a3-16279976d215_0102c6baa88647ca85d925964d070146_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "holy-roman-shirt",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 50,
    },
    {
      id: 56,
      title: "ICONDENIM Printed",
      price: 350000,
      img: [
        "https://product.hstatic.net/1000360022/product/dsc02166_5781a0553c104b9da76dbe88b42cfece_master.jpg",
        "https://product.hstatic.net/1000360022/product/dsc02166_5781a0553c104b9da76dbe88b42cfece_master.jpg",
        "https://product.hstatic.net/1000360022/product/x_d98cbe8bccce46b2aa2076abf0672301_master.jpg",
        "https://product.hstatic.net/1000360022/product/img_3001_retouch_e84e8717e71f4acea8384191531cd08d_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "icon-printed",
      size: ["s", "m", "l"],
      colors: ["black"],
      discount: 20,
    },
    {
      id: 57,
      title: "Flannel Regular-Fit Basic",
      price: 450000,
      img: [
        "https://product.hstatic.net/1000360022/product/dsc07501_retouch_eb910b664a9d4d9c8a4ba57a65f7b4c8_master.jpg",
        "https://product.hstatic.net/1000360022/product/dsc07496_0956ef9eaed74453b30119735d6acba7_master.jpg",
        "https://product.hstatic.net/1000360022/product/dsc07489_3746f76671164fa49e0677eb4daa2867_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "flannel-basic",
      size: ["s", "m", "l"],
      colors: ["red", "blue", "gray"],
      discount: 20,
    },
    {
      id: 58,
      title: "BLUE EMBROIDERY LONG SLEEVE",
      price: 295000,
      img: [
        "https://product.hstatic.net/200000239547/product/img_2205_7ecab2e80f564bdbb96054f77eb70269_1024x1024.jpg",
        "https://product.hstatic.net/200000239547/product/img_2206_74743786fecd493a8dee93584907d106_1024x1024.jpg",
        "https://product.hstatic.net/200000239547/product/img_2389_0cd447cf15ef48c29449e2c07fb1e389_1024x1024.jpg",
        "https://product.hstatic.net/200000239547/product/img_2390_2138a81d44e1449bb326c2ecaac6e688_1024x1024.jpg",
      ],
      categorySlug: "shirt",
      slug: "blue-sleeve-long",
      size: ["s", "m", "l"],
      colors: ["blue"],
      discount: 20,
    },
    {
      id: 59,
      title: "BLUE COLOR WATER",
      price: 169000,
      img: [
        "https://product.hstatic.net/200000239547/product/415_b953d80a40724ae5a060411cfd88398b_compact.jpg",
        "https://product.hstatic.net/200000239547/product/415_3__38f46db9ac3b4d17b1380f802b427b3e_compact.jpg",
        "https://product.hstatic.net/200000239547/product/415_1__1094e852a63c4b808518dafdbcac2db1_compact.jpg",
        "https://product.hstatic.net/200000239547/product/415_2__1e99c565ab6f4a14833a4b164948ed7f_compact.jpg",
      ],
      categorySlug: "shirt",
      slug: "blue-color-water",
      size: ["s", "m", "l"],
      colors: ["blue"],
      discount: 20,
    },
    {
      id: 60,
      title: "Cheetah Shirt",
      price: 369000,
      img: [
        "https://product.hstatic.net/1000383583/product/42188132-7da8-4aa3-9ef6-4fec00cf33e9_46d216c736d3407f86ae87793941a749_master.jpg",
        "https://product.hstatic.net/1000383583/product/42188132-7da8-4aa3-9ef6-4fec00cf33e9_46d216c736d3407f86ae87793941a749_master.jpg",
        "https://product.hstatic.net/1000383583/product/38ec7629-aa60-49f6-b933-8cc29f279211_3aa01b83226d446ab8d953ef62e3e9a9_master.jpg",
      ],
      categorySlug: "shirt",
      slug: "cheetah-shirt",
      size: ["s", "m", "l"],
      colors: ["orange"],
      discount: 50,
    },

    //shirt Collection
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
    {
      id: 6000,
      img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/2-40865d8d-17e2-47a7-876b-f50e430b2b70.png?v=1622924525513",
      categorySlug: "accessories",
      quanlity: "13",
    },
  ],
};

export default data;
