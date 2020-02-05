import React from "react";
import { Router, Route } from "react-router-dom";
import CreatePlaylist from "../components/playlists/CreatePlaylist";
import ShowPlaylists from "../components/playlists/ShowPlaylists";
import EditPlaylist from "../components/playlists/EditPlaylist";
import ShowPlaylist from "../components/playlists/ShowPlaylist";
import SearchBar from "../components/playlists/SearchBar";
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
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={ShowPlaylists} />
              <Route exact path="/playlist/create" component={CreatePlaylist} />
              <Route
                exact
                path="/playlist/edit/:id"
                component={withRouter(EditPlaylist)}
              />
              <Route exact path="/playlist/show/:id" component={ShowPlaylist} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
