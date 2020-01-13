import _ from "lodash";
import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  GET_USER_ID
} from "../actions/types";

export default (state = {}, action) => {
  console.log("reducer", action.type)
  switch (action.type) {
    case GET_USER_ID:
        return {...state, "user_id": action.payload};
    case CREATE_PLAYLIST:
      return { ...state,  "playlist_id": action.payload };
    case DELETE_PLAYLIST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

