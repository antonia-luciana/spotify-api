import React from "react";
import { connect } from "react-redux";
import { deleteTrackFromPlaylist } from "../../actions/index";

class DeleteTrackFromPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist_id: this.props.playlist_id,
      track_uri: this.props.track_uri
    };
    this.onSubmit = this.onSubmit.bind(this)
  }
  

  onSubmit = event => {
    event.preventDefault();
    this.props.deleteTrackFromPlaylist(this.state.playlist_id, this.state.track_uri);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <button className="ui button">Delete</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
      playlist: state.playlists.playlist
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTrackFromPlaylist: (playlist_id, track_uri) => {
      deleteTrackFromPlaylist(dispatch, playlist_id, track_uri)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps )(DeleteTrackFromPlaylist));

