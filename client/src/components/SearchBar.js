import React from "react";
import Track from "../components/Track";
import SelectDropdown from "../components/SelectDropdown";
import AddTrackToPlaylist from "../containers/AddTrackToPlaylist";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

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
    console.log(this.props);
    let result = "";
    if (this.props.search_result) {
      let playlistsOptions = [];
      if (this.props.playlists) {
        playlistsOptions = this.props.playlists.items.map(playlist => {
          return {
            value: playlist.id,
            label: playlist.name
          };
        });
      }

      let tracks = this.props.search_result.tracks.items;
      result = tracks.map(item => {
        return (
          <Track key={item.id} track={item}>
            <AddTrackToPlaylist
              playlistsOptions={playlistsOptions}
              track_uri={item.uri}
            />
            {/* <form onSubmit={this.onSubmit}>
              <SelectDropdown
                value={this.state.option}
                name="add-track-to-playlist"
                label={"Add to"}
                onChange={this.onChange}
                options={playlistsOptions}
              />
            </form>
            <input type="hidden" value={item.uri}/>
            <button>Submit</button> */}
          </Track>
        );
      });
    }
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui icon input field">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChange}
              placeholder="Search..."
            />
            <i className="inverted circular search link icon"></i>
          </div>
        </form>
        <div className="ui container">
          <div className="ui middle aligned divided list">{result}</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
