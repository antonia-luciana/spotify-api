import React from "react";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.renderDuration = this.renderDuration.bind(this);
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

  render() {
    const { track } = this.props;
    return (
      <div key={track.id} className="item">
        <i className="large music middle aligned icon"></i>
        <div className="content">
          <div className="header">{track.name}</div>
          <div className="description">
            {track.artists.map(artist => artist.name).join(", ")} .{" "}
            {track.album.name}
          </div>
          <div>{this.props.children}</div>
        </div>
        <div className="right floated content_ms">
          {this.renderDuration(track.duration_ms)}
        </div>
      </div>
    );
  }
}

export default Track;
