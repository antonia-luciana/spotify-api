import React from "react";

const Input = ({ name, label, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input name={name} onChange={onChange} value={value}/>
    </div>
  );
};

export default Input;
