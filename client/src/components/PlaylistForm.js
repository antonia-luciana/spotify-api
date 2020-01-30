import React from "react";
import Input from "./Input";
import SelectDropdown from "./SelectDropdown";
import Button from "../components/Button";

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
		this.state = this.props.stateValues;
	}

  componentWillReceiveProps() {
    this.setState(this.props.stateValues)
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(this.props.state)
    }
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    console.log("values for edit call ", this.state)
    this.props.onSubmit(this.state);
  };

  render() {
    const { buttonLabel} = this.props;
 
    const { name, description, collaborative} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Input name="name" label={"Enter name:"} onChange={this.onChange} value={name}/>
        <Input
          name="description"
          label="Enter description : "
          onChange={this.onChange}
          value={description}
        />
        <div>
          <SelectDropdown
            name="public"
            label={"Public"}
            value={this.state.public}
            onChange={this.onChange}
            options={[{value: "true"}, {value: "false"}]}
          />
          <SelectDropdown
            name="collaborative"
            label={"Collaborative"}
            value={collaborative}
            onChange={this.onChange}
            options={[{value: "true"}, {value: "false"}]}
          />
        </div>
        <Button label={buttonLabel}/>
      </form>
    );
  }
}

export default PlaylistForm;
