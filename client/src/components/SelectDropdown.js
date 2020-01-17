import React from "react";

class SelectDropdown extends React.Component {
  render() {
    const options = this.props.options.map((option, index) => {
      return (
        <option key={index} value={option}>
          {option[0].toUpperCase() + option.slice(1)}
        </option>
      );
    });
    const { name, label, onChange, value } = this.props;
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={value} onChange={onChange}>
          {options}
        </select>
      </div>
    );
  }
}

export default SelectDropdown;
