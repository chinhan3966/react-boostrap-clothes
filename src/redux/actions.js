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

export const addInformationGG = (item) => {
  return {
    type: "add-information-user",
    payload: item,
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

export const logOut = () => {
  return {
    type: "log-out",
  };
};
