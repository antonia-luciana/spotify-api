import React from "react";

class DeletePlaylist extends React.Component {
  componentDidMount() {
    this.props.deletePlaylist(this.props.match.params.id);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default DeletePlaylist;
