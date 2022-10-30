let initialState = {
  loginGG: JSON.parse(localStorage.getItem("info-user-gg")) || {},
  loginDB: JSON.parse(localStorage.getItem("info-user-database")) || {},
  token: JSON.parse(localStorage.getItem("token")) || "",
};
// if (localStorage.getItem("cartG4")) {
//   initialState = [...JSON.parse(localStorage.getItem("cartG4"))];
// }

const authItem = (state = initialState, action) => {
  switch (action.type) {
    case "add-information-user":
      localStorage.setItem("info-user-gg", JSON.stringify(action.payload));
      return { ...state, loginGG: action.payload };
    case "add-information-user-database":
      localStorage.setItem(
        "info-user-database",
        JSON.stringify(action.payload)
      );
      return { ...state, loginDB: action.payload };
    case "add-token-login":
      localStorage.setItem("token", JSON.stringify(action.payload));
      return { ...state, token: action.payload };
    case "remove-information-user":
      return { ...state, loginGG: {} };
    case "set-user-gg":
      let infoGG = JSON.parse(localStorage.getItem("info-user-gg"));
      if (infoGG) {
        return { ...state, loginGG: infoGG };
      }
    case "set-user-db":
      let infoDB = JSON.parse(localStorage.getItem("info-user-database"));
      if (infoDB) {
        return { ...state, loginDB: infoDB };
      }
    case "log-out":
      localStorage.clear("info-user-gg");
      localStorage.clear("info-user-database");
      localStorage.clear("token");

      return { ...state, loginGG: {}, loginDB: {}, token: "" };

    default:
      return state;
  }
};

export { authItem };
