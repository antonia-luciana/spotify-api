import DeleteTrackFromPlaylist from "../components/playlists/DeleteTrackFromPlaylist";
import { connect } from "react-redux";
import { deleteTrackFromPlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
      playlist: state.playlists.playlist
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTrackFromPlaylist: playlist_id => {
      deletePlaylist(dispatch, playlist_id)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps )(DeleteTrackFromPlaylist));
