import EditPlaylist from "../components/playlists/EditPlaylist";
import { connect } from "react-redux";
import { fetchPlaylist, editPlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
    playlist: state.playlists.playlist
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //mapDispatchToProps for redux thunk
    // getUserId: () => {
    //   getUserId(dispatch);
    // },
    fetchPlaylist: playlist_id => {
      fetchPlaylist(dispatch, playlist_id)
    },
    editPlaylist: ( values) => {
      editPlaylist(dispatch, values)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(EditPlaylist));
