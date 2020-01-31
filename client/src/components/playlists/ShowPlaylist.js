import React from "react";
import Track from "./Track";
import DeleteTrackFromPlaylist from "../playlists/DeleteTrackFromPlaylist";
import { connect } from "react-redux";
import { fetchPlaylistTracks, deleteTrackFromPlaylist} from "../../actions/index";

class ShowPlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.match.params.id);
  }

  render() {
    if (!this.props.playlist_tracks) {
      return null;
    }
    
    return (
      <div className="ui container">
        <div className="ui middle aligned divided list">{
          this.props.playlist_tracks.items.map(item => {
            const track = item.track;
            return (
              <Track key={track.id} track={track}>
                <DeleteTrackFromPlaylist playlist_id={this.props.match.params.id} track_uri={track.uri}/>
              </Track>
            );
          })
        }</div>
      </div>
    );
  }
}

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
