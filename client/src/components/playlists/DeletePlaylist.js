import React from "react";
import Modal from "../shared/Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { connect } from "react-redux";
import { fetchPlaylist, deletePlaylist } from "../../actions/index";

class DeletePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.renderActions = this.renderActions.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <Button
          onClick={() => {
            return this.props.deletePlaylist(id);
          }}
          label="Unfollow"
          className="ui button negative"
        />
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.playlist) {
      return "Are you sure you want to follow this playlist?";
    }
    return `Are you sure you want to unfollow ${this.props.playlist.name}?`;
  }

  render() {
    return (
      <Modal
        title="Unfollow Playlist"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.playlists.playlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: playlist_id => {
      deletePlaylist(dispatch, playlist_id);
    },
    fetchPlaylist: playlist_id => {
      fetchPlaylist(dispatch, playlist_id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePlaylist);
