import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../containers/SearchBar";
import ShowPlaylist from "./ShowPlaylist";
import SelectDropdown from "../SelectDropdown";

class CreatePlaylist extends React.Component {
  componentDidMount() {
    let access_token = new URL(window.location.href).searchParams.get(
      "access_token"
    );

    if (!access_token) {
      access_token = window.localStorage.getItem("access_token");
    } else {
      this.props.setAccessToken(access_token);
    }

    this.props.getUserId();
    this.props.fetchPlaylists(access_token);
  }

  setAccessToken = () => {
    if (this.props.access_token) {
      window.localStorage.setItem("access_token", this.props.access_token);
    }
  };

  setUserId = () => {
    if (this.props.getUserId) {
      window.localStorage.setItem("user_id", this.props.user_id);
    }
  };

  render() {
    if (!this.props.playlists) {
      return null;
    }

    this.setAccessToken();
    this.setUserId();
    const playlists = this.props.playlists.items.map(playlist => {
      const modify =
        playlist.owner.id === window.localStorage.getItem("user_id") ? (
          <span>
            <Link className="ui button positive" to={`/edit/${playlist.id}`}>
              Edit
            </Link>
            <Link className="ui button negative" to={`/delete/${playlist.id}`}>
              Unfollow
            </Link>
          </span>
        ) : (
          <Link className="ui button negative" to={`/delete/${playlist.id}`}>
            Unfollow
          </Link>
        );
      return (
        <div key={playlist.id} className="item">
          <i className="large music middle aligned icon"></i>
          <div className="content">
            <div className="header">{playlist.name}</div>
            <div className="description">
              {playlist.description || playlist.owner.display_name}
            </div>
          </div>
          <div>
            {modify}
            <Link className="ui button" to={`/show/${playlist.id}`}>
              Show
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <SearchBar playlists={this.props.playlists}/>
        <div className="ui relaxed divided list">
          <div className="ui header">My playlists</div>
          {playlists}
          <div>
            <Link className="ui button primary" to="/create">
              Create Playlist
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
