import React from "react";

class SelectDropdown extends React.Component {
  onChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const options = this.props.options.map((option, index) => {
      return (
        <option key={index} value={option}>
          {option[0].toUpperCase() + option.slice(1)}
        </option>
      );
    });
    const { name, label, onChange } = this.props;
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={this.props.public} onChange={onChange}>
          {options}
        </select>
      </div>
    );
  }
}

export default SelectDropdown;
