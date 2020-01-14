import React from "react";
import {Link} from "react-router-dom";

class CreatePlaylist extends React.Component {

  componentDidMount() {
	const access_token = new URL(window.location.href).searchParams.get(
      "access_token"
    );
    this.props.setAccessToken(access_token);
    this.props.fetchPlaylists(access_token);
  }

  setAccessToken = () => {
      if (this.props.access_token) {
        window.localStorage.setItem("access_token", this.props.access_token)
      }
  }

  render() {
    this.setAccessToken();
    console.log("render props", this.props, this.state);
    if (!this.props.playlists.playlists) {
      return null;
    } 
    const playlists = this.props.playlists.playlists.items.map(playlist => {
        return (
            <div key={playlist.id} className="item">
                <i className="large music middle aligned icon"></i>
                <div className="content">
                <div className="header">
                    {playlist.name}
                </div>
                <div className="description">
                    {playlist.description || playlist.owner.display_name}
                </div>
                </div>               
            </div>
        )
    })
    return (
        <div className="ui relaxed divided list">
            <div className="ui header">
                My playlists
            </div>
            {playlists}
            <div>
                <Link className="ui button primary" to="/create">Create Playlist</Link>
            </div>
        </div>
    )
  }
}

export default CreatePlaylist;
