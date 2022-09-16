let initialState = {
  loginGG: {},
  loginDB: {},
};
// if (localStorage.getItem("cartG4")) {
//   initialState = [...JSON.parse(localStorage.getItem("cartG4"))];
// }

const authItem = (state = initialState, action) => {
  switch (action.type) {
    case "add-information-user":
      localStorage.setItem("info-user-gg", JSON.stringify(action.payload));
      return { ...state, loginGG: action.payload };
    case "remove-information-user":
      return { ...state, loginGG: {} };
    case "set-user-gg":
      let infoGG = JSON.parse(localStorage.getItem("info-user-gg"));
      if (infoGG) {
        return { ...state, loginGG: infoGG };
      }
    case "log-out":
      localStorage.clear("info-user-gg");
      return { ...state, loginGG: {} };
    default:
      return state;
  }
};

export { authItem };
