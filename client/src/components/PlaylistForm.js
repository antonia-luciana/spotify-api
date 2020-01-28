import React from "react";
import Input from "./Input";
import SelectDropdown from "./SelectDropdown";

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in form", this.props, props);
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
    console.log("state in form", this.state);
    const { buttonLabel} = this.props;
    console.log(this.props)
 
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
            options={["true", "false"]}
          />
          <SelectDropdown
            name="collaborative"
            label={"Collaborative"}
            value={collaborative}
            onChange={this.onChange}
            options={["true", "false"]}
          />
        </div>
        <button className="">{buttonLabel}</button>
      </form>
    );
  }
}

export default PlaylistForm;
