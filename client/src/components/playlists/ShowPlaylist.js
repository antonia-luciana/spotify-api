import React from "react";
import Track from "../Track";
import Button from "../Button";

class ShowPlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.match.params.id);
  }

  deleteTrackFromPlaylist() {}

  render() {
    if (!this.props.playlist_tracks) {
      return null;
    }

    const tracks = this.props.playlist_tracks.items.map(item => {
      const track = item.track;
      return (
        <Track key={track.id} track={track}>
          <Button className="ui button" onClick={this.deleteTrackFromPlaylist} label="Delete" />
        </Track>
      );
    });

    return (
      <div className="ui container">
        <div className="ui middle aligned divided list">{tracks}</div>
      </div>
    );
  }
}

export default ShowPlaylist;
