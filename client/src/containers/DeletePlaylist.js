import DeletePlaylist from "../components/playlists/DeletePlaylist";
import { connect } from "react-redux";
import { fetchPlaylist, deletePlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
      playlist: state.playlists.playlist
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylist: playlist_id => {
      deletePlaylist(dispatch, playlist_id)
    },
    fetchPlaylist: (playlist_id) => {
      fetchPlaylist(dispatch, playlist_id)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps )(DeletePlaylist));
