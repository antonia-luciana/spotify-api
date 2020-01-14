import {
  GET_USER_ID_ERROR
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_ID_ERROR:
        return {...state, "error": action.error};
    default:
      return state;
  }
};

