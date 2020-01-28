import React from "react";

class ShowPlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.match.params.id);
  }

  renderDuration(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
  }

  deleteTrackFromPlaylist() {}

  render() {
    if (!this.props.playlist_tracks) {
      return null;
    }

    const tracks = this.props.playlist_tracks.items.map(item => {
      const track = item.track;
      const artistsNumber = track.artists.length;
      let result = "";
      track.artists.map((artist, index) => {
        if (index < artistsNumber - 1) {
          result += `${artist.name}, `;
        } else {
          result += artist.name;
        }
        return ;
      });
      return (
        <div key={track.id} className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">{track.name}</div>
            <div className="description">
              {result} . {track.album.name}
            </div>
            <div>
              <button
                className="ui button"
                onClick={this.deleteTrackFromPlaylist}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="right floated content_ms">{this.renderDuration(track.duration_ms)}</div>
        </div>
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
