import { Add_Card } from "../constant";
const initialState = {
  user: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Card:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
