import {
  GET_USER_ID,
  CREATE_PLAYLIST,
  GET_USER_ID_ERROR,
  FETCH_PLAYLIST,
  FETCH_PLAYLIST_ERROR,
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLIST_TRACKS,
  SET_ACCESS_TOKEN,
  EDIT_PLAYLIST,
  DELETE_PLAYLIST
} from "./types";
import axios from "axios";
import { store } from "../index";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const setAccessToken = access_token => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: access_token
  };
};

export const getUserId = async dispatch => {
  try {
    const access_token = store.getState().playlists.access_token;
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    if (response.status === 200) {
      dispatch({ type: GET_USER_ID, payload: response.data.id });
    } else {
      dispatch({ type: GET_USER_ID, payload: null });
    }
  } catch (error) {
    dispatch({ type: GET_USER_ID_ERROR, error: error });
  }
};

export const fetchPlaylists = async dispatch => {
  try {
    const access_token = store.getState().playlists.access_token;
    const response = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );

    if (response.status === 200) {
      dispatch({ type: FETCH_PLAYLISTS, payload: response.data });
    } else {
      dispatch({ type: FETCH_PLAYLISTS, payload: null });
    }
  } catch (error) {
    dispatch({ type: FETCH_PLAYLISTS_ERROR, error: error });
  }
};

export const fetchPlaylist = async (dispatch, playlist_id) => {
  dispatch({type: FETCH_PLAYLIST, payload: null})
  try {
    const access_token = store.getState().playlists.access_token;
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlist_id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: FETCH_PLAYLIST, payload: response.data });
    } else {
      dispatch({ type: FETCH_PLAYLIST, payload: null });
    }
  } catch (error) {
    dispatch({ type: FETCH_PLAYLIST_ERROR, error: error });
  }
};

export const fetchPlaylistTracks = async (dispatch, playlist_id) => {
  dispatch({type: FETCH_PLAYLIST_TRACKS, payload: null})
  try {
    const access_token = store.getState().playlists.access_token;
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: FETCH_PLAYLIST_TRACKS, payload: response.data });
    } 
  } catch (error) {
    //dispatch({ type: FETCH_PLAYLIST_ERROR, error: error });
  }
};

export const createPlaylist = async (dispatch, values) => {
  console.log("date ajunse in actiune", values);
  console.log("store", store.getState());
  const access_token = store.getState().playlists.access_token;
  const user_id = store.getState().playlists.user_id;
  const { name, collaborativ, description } = values;
  var config = {
    method: "POST",
    url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
    data: JSON.stringify({
      name: name,
      public: values.public,
      collaborativ,
      description
    }),
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  const response = await axios(config);
  console.log("action", response.data);
  dispatch({
    type: CREATE_PLAYLIST,
    payload: response.data
  });
};



export const editPlaylist = async (dispatch, values) => {
  try {
    const access_token = store.getState().playlists.access_token;
    const { name, collaborativ, description, playlist_id} = values;
    console.log("acces token in action", access_token, playlist_id);
    const data = {
      name: name,
      public: values.public,
      collaborativ 
    }
    if (description) {
      data.description = description
    }
    var config = {
      method: "PUT",
      url:  `https://api.spotify.com/v1/playlists/${playlist_id}`,
      data: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    const response = await axios(config);
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: EDIT_PLAYLIST, payload: response.data });
    } else {
      dispatch({ type: EDIT_PLAYLIST, payload: null });
    }
  } catch (error) {
    //dispatch({ type: EDIT_PLAYLIST_ERROR, error: error });
  }
};


export const deletePlaylist  = async (dispatch, playlist_id) => {
  try {
    const access_token = store.getState().playlists.access_token;
    console.log("acces token in action", access_token, playlist_id);
    
    var config = {
      method: "DELETE",
      url:  `https://api.spotify.com/v1/playlists/${playlist_id}/followers`,
      headers: {
        Authorization: "Bearer " + access_token
      }
    };
    const response = await axios(config);
    console.log("RAspuns", response);
    if (response.status === 200) {
      dispatch({ type: DELETE_PLAYLIST });
    } else {
      dispatch({ type: DELETE_PLAYLIST });
    }
  } catch (error) {
    //dispatch({ type: EDIT_PLAYLIST_ERROR, error: error });
  }
};

