import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { formValueSelector } from 'redux-form';

class CreatePlaylist extends React.Component {
  state = {
    access_token: null,
    name: "",
    public: false
  };

  componentDidMount() {
    console.log("Mount");
		const access_token = new URL(window.location.href).searchParams.get(
      "access_token"
    );
    this.setState({
      access_token
    })
    this.getUserId(access_token);
  }

  getUserId = access_token => {
    this.props.getUserId(access_token);
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
        <label>Public: </label>
        <select name="public" value={this.state.public} onChange={this.onChange}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
      <button className="">Submit</button>
    </form>)
  }
}

export default CreatePlaylist;
