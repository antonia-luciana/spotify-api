import React from "react";
import { mount, shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";
import AddTrackToPlaylist from "./AddTrackToPlaylist";

describe("<AddTrackToPlaylist />", function() {
  beforeEach(() => {
    // this.playlist_id = "2SmOcwT7RInNgqVhcOBRBs";
    // this.track_uri = "spotify:track:4iV5W9uYEdYUVa79Axb7Rh";
    this.getComponent = () => {
      return <AddTrackToPlaylist playlist_id= "2SmOcwT7RInNgqVhcOBRBs" track_uri="spotify:track:4iV5W9uYEdYUVa79Axb7Rh"/>
    }

    it("should render the option", () => {
      let wrapper = shallow(this.getComponent());
      console.log(wrapper);
      //expect(enzymeToJson(wrapper)).toMatchSnapshot();
    })
  });
});
