import React from "react";
import PlaylistForm from "./PlaylistForm";
import { connect } from "react-redux";
import { fetchPlaylist, editPlaylist } from "../../actions/index";

class EditPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist_id: this.props.match.params.id
    };
  }
  componentDidMount() {
    this.props.fetchPlaylist(this.state.playlist_id);
  }

  onSubmit = values => {
    this.props.editPlaylist(values, this.state.playlist_id);
  };

  render() {
    if (!this.props.playlist) {
      return null;
    }
    
    const { name, description, collaborative } = this.props.playlist;
    return (
      <div>
        <PlaylistForm
          buttonLabel="Edit Playlist"
          onSubmit={this.onSubmit}
          stateValues={{
            name,
            description,
            public: this.props.playlist.public,
            collaborative,
            playlist_id: this.props.match.params.id
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.playlists.playlist,
    edited_playlist: state.playlists.edited_playlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlist_id => {
      fetchPlaylist(dispatch, playlist_id);
    },
    editPlaylist: (values, playlist_id) => {
      editPlaylist(dispatch, values, playlist_id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylist);
