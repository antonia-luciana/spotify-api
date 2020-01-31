import React from "react";
import Track from "./Track";
import AddTrackToPlaylist from "./AddTrackToPlaylist";
import { connect } from "react-redux";
import { search, addTrackToPlaylist } from "../../actions";
import Input from "../shared/Input";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.term);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTrackToPlaylist(this.state.term);
  };

  render() {
    let playlistsOptions = [];
    if (this.props.search_result) {
      if (this.props.playlists) {
        playlistsOptions = this.props.playlists.items.map(playlist => {
          return {
            value: playlist.id,
            label: playlist.name
          };
        });
      }
    }
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui icon input field">
            <Input value={this.state.term} onChange={this.onChange} placeholder="Search..."/>
            <i className="inverted circular search link icon"></i>
          </div>
        </form>
        <div className="ui container">
          <div className="ui middle aligned divided list">
            {this.props.search_result &&
              this.props.search_result.tracks.items.map(item => {
                return (
                  <Track key={item.id} track={item}>
                    <AddTrackToPlaylist
                      playlistsOptions={playlistsOptions}
                      track_uri={item.uri}
                    />
                  </Track>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    search_result: state.playlists.search_result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => {
      search(dispatch, searchTerm);
    },
    addTrackToPlaylist: values => {
      addTrackToPlaylist(values);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
