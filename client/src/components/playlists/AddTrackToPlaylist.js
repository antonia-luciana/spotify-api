import React from "react";
import SelectDropdown from "../SelectDropdown";

class AddTrackToPlaylist extends React.Component {
  state = {
    playlist_id: this.props.playlistsOptions[0].value,
    track_uri: this.props.track_uri
  };

  onChange = event => {
    this.setState({
      [event.target.value]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state, this.props)
    this.props.addTrackToPlaylist(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <SelectDropdown
          value={this.state.playlist_id}
          name="playlist_id"
          label={"Add to"}
          onChange={this.onChange}
          options={this.props.playlistsOptions}
        />
        <input
          name="track_uri"
          type="hidden"
          value={this.state.item_uri}
          onChange={this.onChange}
        />
        <button className="ui button">Add To</button>
      </form>
    );
  }
}

export default AddTrackToPlaylist;
