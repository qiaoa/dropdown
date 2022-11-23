import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

export const MultiSelect = (props) => {
  const handleItemClick = (optionLabel) => {
    if (props.selectedValues.includes(optionLabel)) {
      // currently selected
      props.selectedValues.splice(props.selectedValues.indexOf(optionLabel), 1);
      props.setSelectedValues((current) =>
        current.filter((selectedValue) => selectedValue !== optionLabel)
      );
    } else {
      // currently not selected
      props.setSelectedValues((current) => [...current, optionLabel]);
    }
  };

  return (
    <div className="dropdown-menu">
      {props.options.map((option) => (
        <div
          onClick={() => handleItemClick(option.label)}
          key={option.value}
          className={`dropdown-menu-item ${
            props.selectedValues.includes(option.label) ? "selected" : ""
          }`}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

MultiSelect.propTypes = {
  selectedValue: PropTypes.array,
  setSelectedValue: PropTypes.func,
  setExpanded: PropTypes.func,
  options: PropTypes.array,
};
