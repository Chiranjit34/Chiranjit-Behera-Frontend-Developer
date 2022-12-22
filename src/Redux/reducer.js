import { GET_DATA_SUCCESS } from "./action";

const initState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
