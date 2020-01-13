import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import playlistReducer from "./playlistReducer";
import errorReducer from ".//errorReducer"

export default combineReducers({
  form: formReducer,
  playlists: playlistReducer,
  errors: errorReducer
});
