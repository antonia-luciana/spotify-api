import React from "react";

class SelectDropdown extends React.Component {
  render() {
    let options = this.props.options.map((option, index) => {
      let { label, value } = option;
      if (!option.label) {
        label = value[0].toUpperCase() + value.slice(1);
      }
      return (
        <option key={index} value={value} className="option">
          {label}
        </option>
      );
    });
    const { name, label, onChange, value } = this.props;
    return (
      <div>
        <label>{label}</label>
        <select value={value} name={name} onChange={onChange} className="ui selection dropdown">
          {options}
        </select>
      </div>
    );
  }
}

export default SelectDropdown;
