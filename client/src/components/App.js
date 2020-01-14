import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import CreatePlaylist from "../containers/CreatePlaylist";
import ShowPlaylists from "../containers/ShowPlaylists";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={ShowPlaylists} />
            <Route path="/create" exact component={CreatePlaylist} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
