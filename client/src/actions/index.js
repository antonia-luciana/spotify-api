import history from "../history";
import {
  ADD_TRACK_TO_PLAYLIST,
  GET_USER_ID,
  CREATE_PLAYLIST,
  FETCH_PLAYLIST,
  FETCH_PLAYLISTS,
  FETCH_PLAYLIST_TRACKS,
  SET_TOKEN_DATA,
  EDIT_PLAYLIST,
  DELETE_PLAYLIST,
  DELETE_TRACK_FROM_PLAYLIST,
  SEARCH
} from "./types";
import axios from "axios";
import { store } from "../index";
import { $CombinedState } from "redux";

//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const reload = () => {
  const current = window.location.pathname;
  history.replace(`/reload`);
  setTimeout(() => {
    history.replace(current);
  });
};

export const executeCall = async (method, url, data = null) => {
  data = data ? JSON.stringify(data) : null;
  console.log(store.getState().playlists)
  const access_token = store.getState().playlists && store.getState().playlists.token_data.access_token;
  const config = {
    method,
    url: `https://api.spotify.com/v1/${url}`,
    data,
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  const response = await axios(config);
  console.log(response);
  return response.status === 200 || response.status === 201
    ? response.data
    : null;
};

export const setTokenData = token_data => {
  return {
    type: SET_TOKEN_DATA,
    payload: token_data
  };
};

export const getUserId = async dispatch => {
  const response = await executeCall("GET", `me`);
  dispatch({
    type: GET_USER_ID,
    payload: response.id
  });
};

export const fetchPlaylists = async dispatch => {
  const response = await executeCall("GET", `me/playlists`);
  dispatch({
    type: FETCH_PLAYLISTS,
    payload: response
  });
};

export const fetchPlaylist = async (dispatch, playlist_id) => {
  const response = await executeCall("GET", `playlists/${playlist_id}`);
  dispatch({
    type: FETCH_PLAYLIST,
    payload: response
  });
};

export const fetchPlaylistTracks = async (dispatch, playlist_id) => {
  const response = await executeCall("GET", `playlists/${playlist_id}/tracks`);
  dispatch({ type: FETCH_PLAYLIST_TRACKS, payload: response });
};

export const createPlaylist = async (dispatch, values) => {
  const user_id = store.getState().playlists.user_id;
  const response = await executeCall(
    "POST",
    `users/${user_id}/playlists`,
    values
  );
  dispatch({
    type: CREATE_PLAYLIST,
    payload: response
  });
  history.push("/");
};

export const editPlaylist = async (dispatch, values, playlist_id) => {
  const response = await executeCall("PUT", `playlists/${playlist_id}`, values);
  dispatch({
    type: EDIT_PLAYLIST,
    payload: response
  });
  history.push("/");
};

export const deletePlaylist = async (dispatch, playlist_id) => {
  const response = await executeCall(
    "DELETE",
    `playlists/${playlist_id}/followers`
  );
  dispatch({
    type: DELETE_PLAYLIST,
    payload: response
  });

  reload();
};

export const search = async (dispatch, searchTerm) => {
  const response = await executeCall(
    "GET",
    `search?q=${searchTerm}&type=track`
  );

  dispatch({
    type: SEARCH,
    payload: response
  });
};

export const addTrackToPlaylist = async (dispatch, values, playlist_id) => {
  const response = await executeCall(
    "POST",
    `playlists/${playlist_id}/tracks`,
    values
  );

  dispatch({
    type: ADD_TRACK_TO_PLAYLIST,
    payload: response
  });
};

export const deleteTrackFromPlaylist = async (
  dispatch,
  playlist_id,
  track_uri
) => {
  const response = await executeCall(
    "DELETE",
    `playlists/${playlist_id}/tracks`,
    {
      tracks: [
        {
          uri: track_uri
        }
      ]
    }
  );

  dispatch({
    type: DELETE_TRACK_FROM_PLAYLIST,
    payload: response
  });
  history.push("/");
  history.push(`/show/${playlist_id}`);
};
