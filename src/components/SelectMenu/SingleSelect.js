import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

export const SingleSelect = (props) => {
  const close = () => {
    props.setExpanded(false);
  };

  const handleItemClick = (option) => {
    if (props.selectedValue === option.label) {
      props.setSelectedValue("");
    } else {
      props.setSelectedValue(option.label);
    }
    close();
  };

  return (
    <div className="dropdown-menu">
      {props.options.map((option) => (
        <div
          onClick={() => handleItemClick(option)}
          key={option.value}
          className={`dropdown-menu-item ${
            option.label === props.selectedValue ? "selected" : ""
          }`}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

SingleSelect.propTypes = {
  selectedValue: PropTypes.string,
  setSelectedValue: PropTypes.func,
  setExpanded: PropTypes.func,
  options: PropTypes.array,
};
