import React from "react";
import "../styles/atoms/input.css";

const Input = ({ type = "text", placeholder, value, onChange, name, disabled = false }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            className="input-field"
        />
    );
};

export default Input;
