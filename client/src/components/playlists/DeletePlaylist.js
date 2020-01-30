import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import Button from "../Button";

class DeletePlaylist extends React.Component {
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

export default DeletePlaylist;
