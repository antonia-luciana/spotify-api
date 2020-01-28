import React from "react";

//Create react component
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
    console.log("here")
    this.props.search(this.state.term);
  };

  render() {
    console.log("search bar props", this.props);
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChange}
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
//Take the react and show it
export default SearchBar;
