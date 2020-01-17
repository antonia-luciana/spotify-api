import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreatePlaylist from "../containers/CreatePlaylist";
import ShowPlaylists from "../containers/ShowPlaylists";
import EditPlaylist from "../containers/EditPlaylist";
import DeletePlaylist from "../containers/DeletePlaylist"
import ShowPlaylist from '../containers/ShowPlaylist';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={ShowPlaylists} />
            <Route exact path="/create" component={CreatePlaylist} />
            <Route exact path="/edit/:id" component={EditPlaylist} />
            <Route exact path="/delete/:id" component={DeletePlaylist} />
            <Route exact path="/show/:id" component={ShowPlaylist} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
