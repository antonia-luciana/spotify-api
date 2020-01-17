import React from "react";
import { Link } from "react-router-dom";

class ShowPlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.match.params.id);
  }

  renderDuration(milliseconds) {
    return 
  }

  render() {
    console.log("render props", this.props, this.state);
    if (!this.props.playlist_tracks) {
      return null;
    }

    const tracks = this.props.playlist_tracks.items.map(item => {
      const track = item.track;
      const artistsNumber = track.artists.length;
      //console.log("nr", artistsNumber, );
      let result = '';
      track.artists.map( (artist, index) => {
          //console.log("artist", artist)
          if  ( index < artistsNumber-1 ) {
            result += `${artist.name}, `;
          } else {
            result += artist.name;
          }
          console.log("res", result);
      });
      return (
        <div key={track.id} className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">{track.name}</div>
                <div className="description">{result} . {track.album.name}</div>
          </div>
          <div className="right floated content_ms">{track.duration_ms}</div>
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
