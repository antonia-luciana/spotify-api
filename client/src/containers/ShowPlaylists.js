import ShowPlaylists from "../components/playlists/ShowPlaylists";
import { connect } from "react-redux";
import { fetchPlaylists, setAccessToken, getUserId} from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
    user_id: state.playlists.user_id,
    playlists: state.playlists.playlists,
    access_token: state.playlists.access_token
   };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: access_token => {
        fetchPlaylists(dispatch, access_token)
    },
    setAccessToken: access_token => {
        dispatch(setAccessToken(access_token))
    },
    getUserId: () => {
      getUserId(dispatch);
    },
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(ShowPlaylists));
