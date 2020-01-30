import React from "react";
import SelectDropdown from "../components/SelectDropdown";

class addTrackToPlaylist extends React.Component {
  state = {
    playlist_id: '',
    track_uri: ''
  };

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.term);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTrackToPlaylist(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <SelectDropdown
          value={this.state.option}
          name="playlist"
          label={"Add to"}
          onChange={this.onChange}
          options={this.props.playlistsOptions}
        />
        <input name="track_uri" type="hidden" value={item.uri} />
        <button>Submit</button>
      </form>
    );
  }
}

export default addTrackToPlaylist;
