import _ from "lodash";
import {
  ADD_TRACK_TO_PLAYLIST,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  GET_USER_ID,
  FETCH_PLAYLIST,
  FETCH_PLAYLISTS,
  SET_TOKEN_DATA,
  EDIT_PLAYLIST,
  FETCH_PLAYLIST_TRACKS,
  DELETE_TRACK_FROM_PLAYLIST,
  SEARCH
} from "../actions/types";

const initialState = {
  token_data: localStorage.getItem("token_data"),
  user_id: localStorage.getItem("user_id")
};

export default (state = initialState, action) => {
  //console.log(action.type, action.payload)
  switch (action.type) {
    case ADD_TRACK_TO_PLAYLIST:
      return _.omit(state, action.payload);
    case GET_USER_ID:
      return { ...state, user_id: action.payload };
    case SET_TOKEN_DATA:
      return { ...state, token_data: action.payload };
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
