import React from "react";
import SelectDropdown from "../SelectDropdown";

class CreatePlaylist extends React.Component {
  state = {
    access_token: null,
    name: "",
    public: false,
    collaborative: false
  };

  componentDidMount() {
    console.log("mount ***", this.props);
    this.getUserId();
  }

  getUserId = () => {
    this.props.getUserId();
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event, formValues) => {
    event.preventDefault();
    console.log(this.state);
    const {access_token, name} = this.state;
    const {user_id} = this.props;
    this.props.createPlaylist({
      access_token,
      user_id,
      name,
      public: this.state.public
    })
  }

  render() {
    console.log("render props", this.props, this.state);
    if (!this.props.user_id) {
      return null;
    }

    return (
    <form onSubmit={this.onSubmit}>
      <div>
        <label>Enter name: l {this.state.name}</label>
        <input name="name" onChange={this.onChange}/>
      </div>
      <div>
        <SelectDropdown name="public" label={"Public"} value={this.state.public} onChange={this.onChange} options={["true",  "false"]}/>
        <SelectDropdown name="collaborative" label={"Collaborative"} value={this.state.collaborative} onChange={this.onChange} options={["true",  "false"]}/>
      </div>
      <button className="">Submit</button>
    </form>)
  }
}

export default CreatePlaylist;
