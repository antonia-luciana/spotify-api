import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../playlists/SearchBar";
import { connect } from "react-redux";
import { fetchPlaylists, setTokenData, getUserId } from "../../actions/index";
import Button from "../shared/Button";
import DeletePlaylist from "../playlists/DeletePlaylist";
import history from "../../history";

class ShowPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: null
    };
    this.setTokenData = this.setTokenData.bind(this);
    this.setUserId = this.setUserId.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    let access_token = new URL(window.location.href).searchParams.get(
      "access_token"
    );
    let refresh_token = new URL(window.location.href).searchParams.get(
      "refresh_token"
    );
    let expires_in = new URL(window.location.href).searchParams.get(
      "expires_in"
    );
    this.props.setTokenData({
      access_token,
      refresh_token,
      expires_in,
      start_time: new Date().getTime()
    });
    this.props.getUserId();
    this.props.fetchPlaylists();
  }

  setTokenData() {
    console.log("set",this.props)
    if (this.props.token_data) {
      console.log("set toekn data", this.props.token_data)
      window.localStorage.setItem("token_data", this.props.token_data);
    }
  }

  setUserId = () => {
    if (this.props.getUserId) {
      window.localStorage.setItem("user_id", this.props.user_id);
    }
  };

  hideModal() {
    this.setState({ modal: null });
  }

  showModal(playlist) {
    this.setState({
      modal: (
        <DeletePlaylist playlist={playlist} hide={this.hideModal.bind(this)} />
      )
    });
  }

  render() {
    console.log(this.props);
    if (!this.props.playlists) {
      //window.location.replace("http://localhost:8888/login")
      return null;
    }
    this.setTokenData();
    this.setUserId();

    return (
      <div>
        <SearchBar playlists={this.props.playlists} />
        {this.state.modal}
        <div className="ui relaxed divided list">
          <div className="ui header">My playlists</div>
          {this.props.playlists.items.map(playlist => {
            const modify =
              playlist.owner.id === window.localStorage.getItem("user_id") ? (
                <span>
                  <Link
                    className="ui button positive"
                    to={`/playlist/edit/${playlist.id}`}
                  >
                    Edit
                  </Link>
                  <Button
                    label="Unfollow"
                    className="ui button negative"
                    onClick={() => this.showModal(playlist)}
                  />
                </span>
              ) : (
                <Button
                  label="Unfollow"
                  className="ui button negative"
                  onClick={() => this.showModal(playlist)}
                />
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
                  <Link
                    className="ui button"
                    to={`/playlist/show/${playlist.id}`}
                  >
                    Show
                  </Link>
                </div>
              </div>
            );
          })}
          <div>
            <Link className="ui button primary" to="/playlist/create">
              Create Playlist
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.playlists.user_id,
    playlists: state.playlists.playlists,
    access_token: state.playlists.access_token,
    search_result: state.playlists.search_result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: access_token => {
      fetchPlaylists(dispatch, access_token);
    },
    setTokenData: token_data => {
      dispatch(setTokenData(token_data));
    },
    search: searchTerm => {
      dispatch(searchTerm(searchTerm));
    },
    getUserId: () => {
      getUserId(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPlaylists);
