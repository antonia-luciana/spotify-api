import React from "react";
import { Router, Route } from "react-router-dom";
import CreatePlaylist from "../containers/CreatePlaylist";
import ShowPlaylists from "../containers/ShowPlaylists";
import EditPlaylist from "../containers/EditPlaylist";
import DeletePlaylist from "../containers/DeletePlaylist";
import ShowPlaylist from "../containers/ShowPlaylist";
import SearchBar from "../containers/SearchBar";
import { withRouter, Switch } from "react-router";
import history from "../history";

class App extends React.Component {
  renderMainPage() {
    return (
      <div>
        <SearchBar />
        <ShowPlaylists />
      </div>
    );
  }
  render() {
    console.log("redner props", this.props);
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={ShowPlaylists} />
              <Route exact path="/create" component={CreatePlaylist} />
              <Route
                exact
                path="/edit/:id"
                component={withRouter(EditPlaylist)}
              />
              <Route exact path="/delete/:id" component={DeletePlaylist} />
              <Route exact path="/show/:id" component={ShowPlaylist} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
