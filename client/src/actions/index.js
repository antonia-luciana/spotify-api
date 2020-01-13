import { GET_USER_ID, CREATE_PLAYLIST, DELETE_PLAYLIST, GET_USER_ID_ERROR, FETCH_PLAYLISTS } from "./types";
import spotify from "../api/spotify";
import axios from "axios";
import querystring from "query-string";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getUserId = async (dispatch, access_token) => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {headers: {
      Authorization: `Bearer ${access_token}`
    }});

    if (response.status == 200) {
      dispatch({type: GET_USER_ID, payload: response.data.id});
    } else {
      dispatch({type: GET_USER_ID, payload: null});
    }
  } catch (error) {
    dispatch({type: GET_USER_ID_ERROR, error: error});
  }
};

export const fetchPlaylists = async (dispatch, access_token) => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me/playlists", {headers: {
    Authorization: `Bearer ${access_token}`
  }});

  if (response.status == 200) {
    dispatch({type: FETCH_PLAYLISTS, payload: response.data.id});
  } else {
    dispatch({type: FETCH_PLAYLISTS, payload: null});
  }
} catch (error) {
  dispatch({type: FETCH_PLAYLISTS_ERROR, error: error});
}
};

export const createPlaylist = async (dispatch, values) => {
  console.log("form Values in actions ", values, querystring.stringify({s:"naaa"}));
  var config = {
    method: "POST",
    url: `https://api.spotify.com/v1/users/${values.user_id}/playlists`,
    data: JSON.stringify({
        name: values.name,
        public: values.public
    }),
    headers: {
        'Authorization': 'Bearer ' + values.access_token,
        'Content-Type': 'application/json',
         Accept: 'application/json'
    }
  };
  const response = await axios(config);
  console.log(response, response.data);
  dispatch({
    type: CREATE_PLAYLIST,
    payload: response.data
  });
};


