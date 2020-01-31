import React from "react";
import { formValueSelector } from "redux-form";
import _ from "lodash";
import Input from "../shared/Input";
import SelectDropdown from "../shared/SelectDropdown";
import Button from "../shared/Button";


class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.stateValues
      ? {
          ...this.props.stateValues,
          err: ""
        }
      : {
          name: "",
          public: false,
          collaborative: false,
          description: "",
          err: ""
        };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps() {
    this.setState(this.props.stateValues);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (!_.isEqual( prevProps,this.props )) {
      this.setState(this.props.stateValues);
    }
  }

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.name) {
      this.setState({
        err: "Name is required!"
      });
      alert("Form is invalid");
    } else {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    const { buttonLabel } = this.props;
    const { name, description, collaborative } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <Input
            name="name"
            label={"Enter name:"}
            onChange={this.onChange}
            value={name}
          />
          {this.state.err && (
            <p className="ui top pointing red basic label">{this.state.err}</p>
          )}
        </div>
        <div>
          <Input
            name="description"
            label="Enter description : "
            onChange={this.onChange}
            value={description}
          />
        </div>
        <div>
          <SelectDropdown
            name="public"
            label={"Public"}
            value={this.state.public}
            onChange={this.onChange}
            options={[{ value: "true" }, { value: "false" }]}
          />
          <SelectDropdown
            name="collaborative"
            label={"Collaborative"}
            value={collaborative}
            onChange={this.onChange}
            options={[{ value: "true" }, { value: "false" }]}
          />
        </div>
        <Button className="ui button" label={buttonLabel} />
      </form>
    );
  }
}

export default PlaylistForm;
