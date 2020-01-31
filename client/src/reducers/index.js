import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import playlistReducer from "./playlistReducer";

export default combineReducers({
  form: formReducer,
  playlists: playlistReducer
});
