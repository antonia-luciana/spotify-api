import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";

class DeletePlaylist extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => {
            console.log(id)
            this.props.deletePlaylist(id);
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.playlist) {
      return "Are you sure you want to delete this playlist?";
    }
    return `Are you sure you want to delete ${this.props.playlist.name}?`;
  }

  render() {
    return (
      <Modal
        title="Delete Playlist"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default DeletePlaylist;
