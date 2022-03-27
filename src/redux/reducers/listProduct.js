import data from "../../fakeData/data";

const initialState = {
  value: data,
};

const listProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return state;
    }
    default:
      return state;
  }
};

export default listProductReducer;
