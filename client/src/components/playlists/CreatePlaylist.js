import React from "react";
import PlaylistForm from "./PlaylistForm";
import { connect } from "react-redux";
import { getUserId, createPlaylist } from "../../actions/index";
import history from "../../history";

class CreatePlaylist extends React.Component {
  render() {
    return (
      <PlaylistForm buttonLabel="Create Playlist" onSubmit={this.props.createPlaylist}/>
   )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    created_playlist: state.playlists.created_playlist
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: values => {
      createPlaylist(dispatch, values)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(CreatePlaylist));

