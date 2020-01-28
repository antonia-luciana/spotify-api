import ShowPlaylist from "../components/playlists/ShowPlaylist";
import { connect } from "react-redux";
import { fetchPlaylistTracks, deleteTrackFromPlaylist} from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { 
    playlist_tracks: state.playlists.playlist_tracks
   };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylistTracks: playlist_id => {
      fetchPlaylistTracks(dispatch, playlist_id)
    },
    deleteTrackFromPlaylist: playlist_id => {
      deleteTrackFromPlaylist(dispatch, playlist_id)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(ShowPlaylist));
