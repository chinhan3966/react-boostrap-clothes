export const addCart = (item) => {
  return {
    type: "add-item",
    payload: item,
  };
};

export const removeCart = (id) => {
  return {
    type: "remove-item",
    payload: id,
  };
};

export const changeQty = (value) => {
  return {
    type: "change-qty",
    payload: value,
  };
};

export const handleUpdateListCart = (list) => {
  return {
    type: "update-list-cart",
    payload: list,
  };
};

export const handleDeleteListCart = () => {
  return {
    type: "clear-list-cart",
  };
};

export const addInformationGG = (item) => {
  return {
    type: "add-information-user",
    payload: item,
  };
};

export const addInformationDB = (item) => {
  return {
    type: "add-information-user-database",
    payload: item,
  };
};

export const addTokenLogin = (token) => {
  return {
    type: "add-token-login",
    payload: token,
  };
};
export const removeInformationGG = () => {
  return {
    type: "remove-information-user",
  };
};

export const setUserGg = () => {
  return {
    type: "set-user-gg",
  };
};

export const setUserDb = () => {
  return {
    type: "set-user-db",
  };
};

export const logOut = () => {
  return {
    type: "log-out",
  };
};
