import _ from "lodash";
import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  GET_USER_ID,
  FETCH_PLAYLISTS,
  SET_ACCESS_TOKEN
} from "../actions/types";

const initialState = { 
  access_token: localStorage.getItem('access_token')
};

export default (state = {}, action) => {
  console.log("reducer", action.type);
  switch (action.type) {
    case GET_USER_ID:
      return { ...state, user_id: action.payload };
    case SET_ACCESS_TOKEN:
      return {...state, access_token: action.payload};
    case FETCH_PLAYLISTS:
      return {...state, playlists: action.payload};
    case CREATE_PLAYLIST:
      return { ...state, playlist_id: action.payload };
    case DELETE_PLAYLIST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
