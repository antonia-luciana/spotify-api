import React from "react";
import PlaylistForm from "./PlaylistForm";
import { connect } from "react-redux";
import { getUserId, createPlaylist } from "../../actions/index";

class CreatePlaylist extends React.Component {
  render() {
    return (
      <PlaylistForm buttonLabel="Create Playlist" onSubmit={this.props.createPlaylist}/>
   )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    user_id: state.playlists.user_id,
    created_playlist: state.playlists,
    playlists: state.playlists,
    access_token: state.playlists.access_token
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserId: () => {
      getUserId(dispatch);
    },
    createPlaylist: values => {
      createPlaylist(dispatch, values)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(CreatePlaylist));

