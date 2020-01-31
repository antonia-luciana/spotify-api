import React from "react";

const Input = ({ name, label, onChange, value, placeholder }) => {
  return (
    <div className="ui input">
      <label>{label}</label>
      <input name={name} onChange={onChange} value={value} placeholder={placeholder}/>
    </div>
  );
};

export default Input;
