import React from "react";
import PlaylistForm from "../PlaylistForm";

class EditPlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  render() {
    console.log("render state", this.props);
    if (!this.props.playlist) {
      return null;
    }
    const { name, description, collaborative } = this.props.playlist;
    const stateValues = {
        name,
        description,
        public: this.props.playlist.public,
        collaborative,
        playlist_id: this.props.match.params.id
    }
    console.log("state for form", stateValues);
    return (
      <div>
        <PlaylistForm
          buttonLabel="Edit Playlist"
          onSubmit={this.props.editPlaylist}
          stateValues={stateValues}
        />
      </div>
    );
  }
}

export default EditPlaylist;
