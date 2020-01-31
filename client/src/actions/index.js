import history from "../history";
import {
  ADD_TRACK_TO_PLAYLIST,
  GET_USER_ID,
  CREATE_PLAYLIST,
  FETCH_PLAYLIST,
  FETCH_PLAYLISTS,
  FETCH_PLAYLIST_TRACKS,
  SET_ACCESS_TOKEN,
  EDIT_PLAYLIST,
  DELETE_PLAYLIST,  
  DELETE_TRACK_FROM_PLAYLIST,
  SEARCH
} from "./types";
import axios from "axios";
import { store } from "../index";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


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
    if (response.status === 200) {
      dispatch({ type: FETCH_PLAYLIST, payload: response.data });
    } else {
      dispatch({ type: FETCH_PLAYLIST, payload: null });
    }
  } catch (error) {

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

    if (response.status === 200) {
      dispatch({ type: FETCH_PLAYLIST_TRACKS, payload: response.data });
    } 
  } catch (error) {
    
  }
};

export const createPlaylist = async (dispatch, values) => {
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
  dispatch({
    type: CREATE_PLAYLIST,
    payload: response.data
  });
  history.push("/");
};



export const editPlaylist = async (dispatch, values) => {
  try {
    const access_token = store.getState().playlists.access_token;
    const { name, collaborativ, description, playlist_id} = values;
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
    if (response.status === 200) {
      dispatch({ type: EDIT_PLAYLIST, payload: response.data });
    } else {
      dispatch({ type: EDIT_PLAYLIST, payload: null });
    }
    //setTimeout(() => {
    history.push("/");
      
    //});
  } catch (error) {

  }
};


export const deletePlaylist  = async (dispatch, playlist_id) => {
  try {
    const access_token = store.getState().playlists.access_token;
    var config = {
      method: "DELETE",
      url:  `https://api.spotify.com/v1/playlists/${playlist_id}/followers`,
      headers: {
        Authorization: "Bearer " + access_token
      }
    };
    const response = await axios(config);
    
    if (response.status === 200) {
      dispatch({ type: DELETE_PLAYLIST });
    } else {
      dispatch({ type: DELETE_PLAYLIST });
    }
    history.push("/");
  } catch (error) {
    
  }
};

export const search  = async (dispatch, searchTerm) => {
  try {
    const access_token = store.getState().playlists.access_token;
    
    let config = {
      method: "GET",
      url:  `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,
      headers: {
        Authorization: "Bearer " + access_token
      }
    };

    const response = await axios(config);

    if (response.status === 200) {
      dispatch({ type: SEARCH, payload: response.data });
    } 
    history.push("/");
  } catch (error) {
    
  }
};

export const addTrackToPlaylist = async (dispatch, values) => {
  try {
    const access_token = store.getState().playlists.access_token;
    var config = {
      method: "POST",
      url: `https://api.spotify.com/v1/playlists/${values.playlist_id}/tracks`,
      data: JSON.stringify({
        uris: [values.track_uri]
      }),
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    const response = await axios(config);
    if (response.status === 200) {
      dispatch({ type: ADD_TRACK_TO_PLAYLIST, payload: response.data });
    } 
    history.push("/");
  } catch (error) {
    
  }
};

export const deleteTrackFromPlaylist  = async (dispatch, playlist_id, track_uri) => {
  try {
    console.log(playlist_id, track_uri)
    const access_token = store.getState().playlists.access_token;
    var config = {
      method: "DELETE",
      url:  `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        "tracks": [{
          uri: track_uri
        }]
      })
    };
    const response = await axios(config);
    history.push("/")
    history.push(`/show/${playlist_id}`);
    if (response.status === 200) {
      dispatch({ type: DELETE_TRACK_FROM_PLAYLIST });
    } 
    
  } catch (error) {
    
  }
};
