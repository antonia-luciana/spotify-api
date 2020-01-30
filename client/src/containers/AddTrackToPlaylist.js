import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import { search,  addTrackToPlaylist } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {  
    search_result: state.playlists.search_result
   };
};

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => {
      search(dispatch, searchTerm)
    },
    addTrackToPlaylist: (values) => {
      console.log("container")
      addTrackToPlaylist(values)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(SearchBar));
