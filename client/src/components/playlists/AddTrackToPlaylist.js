import React from "react";
import SelectDropdown from "../shared/SelectDropdown";
import { connect } from "react-redux";
import { addTrackToPlaylist } from "../../actions/index";

class AddTrackToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist_id: this.props.playlistsOptions[0].value,
      track_uri: this.props.track_uri
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTrackToPlaylist({
      uris: [this.state.track_uri]
    }, this.state.playlist_id);
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
        <button className="ui button">Add To</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTrackToPlaylist: (values, playlist_id) => {
      addTrackToPlaylist(dispatch, values, playlist_id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrackToPlaylist);