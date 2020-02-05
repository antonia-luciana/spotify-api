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
  }

  render() {
    console.log("prop", this.props);
    if (!this.props.playlist) {
      return null;
    }
    return (
      <Modal
        title={`Unfollow Playlist ${this.props.playlist.name}`}
        content={`Are you sure you want to unfollow ${this.props.playlist.name}?`}
        onClickOk={() => {
          this.props.deletePlaylist(this.props.playlist.id);
        }}
        okLabel="Unfollow"
        okClass="ui button negative"
        onClickCancel={this.props.hide}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: playlist_id => {
      deletePlaylist(dispatch, playlist_id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePlaylist);
