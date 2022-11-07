let initialState = [];
// if (localStorage.getItem("cartG4")) {
//   initialState = [...JSON.parse(localStorage.getItem("cartG4"))];
// }

const cartItem = (state = initialState, action) => {
  switch (action.type) {
    case "add-item":
      let check;
      let saveCart;
      if (state.length > 0) {
        check = state.find((e) => (e.id === action.payload.id ? true : false));
      }
      if (check) {
        saveCart = state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        localStorage.setItem("cartG4", JSON.stringify(saveCart));
      } else {
        saveCart = [...state, action.payload];
        localStorage.setItem("cartG4", JSON.stringify(saveCart));
      }

      return [...saveCart];

    case "remove-item":
      let saveCartRemove = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartG4", JSON.stringify(saveCartRemove));

      return [...saveCartRemove];

    case "change-qty":
      const updateQty = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.quantity }
          : item
      );
      localStorage.setItem("cartG4", JSON.stringify(updateQty));

      return [...updateQty];
    case "update-list-cart":
      return action.payload;
    case "clear-list-cart":
      return [];
    default:
      return state;
  }
};

export { cartItem };
