import DeletePlaylist from "../components/playlists/DeletePlaylist";
import { connect } from "react-redux";
import { deletePlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylist: playlist_id => {
      deletePlaylist(dispatch, playlist_id)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps )(DeletePlaylist));
