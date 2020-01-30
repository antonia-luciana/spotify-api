import AddTrackToPlaylist from "../components/playlists/AddTrackToPlaylist";
import { connect } from "react-redux";
import { addTrackToPlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTrackToPlaylist: values => {
      console.log("container", values);
      addTrackToPlaylist(dispatch, values);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrackToPlaylist);
