import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import { search } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {  
    search_result: state.playlists.search_result
   };
};

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => {
      search(dispatch, searchTerm)
    }
  };
};

export default (connect( mapStateToProps, mapDispatchToProps)(SearchBar));
