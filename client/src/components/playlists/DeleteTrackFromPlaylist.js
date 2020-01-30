import React from "react";

class DeleteTrackFromPlaylist extends React.Component {
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

export default DeleteTrackFromPlaylist;
