import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import spotify from "../api/spotify";
import Login from "./Login";
import { client_id, client_secret } from "../clientData";
import axios from "axios";
import CreatePlaylist from "../containers/CreatePlaylist";

const P = () => {
  return <div>P</div>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={P} />
            <Route path="/create" exact component={CreatePlaylist} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
