// reducers.js
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONG":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
