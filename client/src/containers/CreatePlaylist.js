import CreatePlaylist from "../components/playlists/CreatePlaylist";
import { connect } from "react-redux";
import { getUserId, createPlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
    user_id: state.playlists.user_id,
    created_playlist: state.playlists,
    playlists: state.playlists,
    access_token: state.playlists.access_token
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //mapDispatchToProps for redux thunk
    getUserId: () => {
      getUserId(dispatch);
    },
    createPlaylist: values => {
      createPlaylist(dispatch, values)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(CreatePlaylist));
