import React from "react";
import PlaylistForm from "./PlaylistForm";
import { connect } from "react-redux";
import { fetchPlaylist, editPlaylist } from "../../actions/index";

class EditPlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  render() {
    if (!this.props.playlist) {
      return null;
    }
    const { name, description, collaborative } = this.props.playlist;
    return (
      <div>
        <PlaylistForm
          buttonLabel="Edit Playlist"
          onSubmit={this.props.editPlaylist}
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
    playlist: state.playlists.playlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlist_id => {
      fetchPlaylist(dispatch, playlist_id);
    },
    editPlaylist: values => {
      editPlaylist(dispatch, values);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylist);
