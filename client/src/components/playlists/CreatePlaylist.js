import React from "react";
import PlaylistForm from "../PlaylistForm";

class CreatePlaylist extends React.Component {
  render() {
    const state = {
      name: "",
      public: false,
      collaborative: false,
      description: ""
    };
    console.log("render state", state)
    return (
      <PlaylistForm buttonLabel="Create Playlist" onSubmit={this.props.createPlaylist} stateValues={state}/>
   )
  }
}

export default CreatePlaylist;
