import _ from "lodash";
import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  GET_USER_ID,
  FETCH_PLAYLIST,
  FETCH_PLAYLISTS,
  SET_ACCESS_TOKEN,
  EDIT_PLAYLIST,
  FETCH_PLAYLIST_TRACKS,
  DELETE_TRACK_FROM_PLAYLIST,
  SEARCH
} from "../actions/types";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  user_id: localStorage.getItem("user_id")
};

export default (state = initialState, action) => {
  console.log("reducer", action.type);
  switch (action.type) {
    case GET_USER_ID:
      return { ...state, user_id: action.payload };
    case SET_ACCESS_TOKEN:
      return { ...state, access_token: action.payload };
    case FETCH_PLAYLIST:
      return { ...state, playlist: action.payload };
    case FETCH_PLAYLIST_TRACKS:
      return { ...state, playlist_tracks: action.payload };
    case FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case CREATE_PLAYLIST:
      return { ...state, created_playlist: action.payload };
    case EDIT_PLAYLIST:
      return { ...state, edited_playlist: action.payload };
    case DELETE_PLAYLIST:
      return _.omit(state, action.payload);
    case DELETE_TRACK_FROM_PLAYLIST:
      return _.omit(state, action.payload);
    case SEARCH:
      return {...state, search_result: action.payload}
    default:
      return state;
  }
};
