import React, { useState } from "react";
import { MultiSelect } from "../SelectMenu/MultiSelect";
import { SingleSelect } from "../SelectMenu/SingleSelect";
import PropTypes from "prop-types";
import "./Dropdown.scss";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

export const Dropdown = ({
  placeholder,
  options,
  multiSelect,
  value,
  onChange,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setExpanded(false);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSelectClick = () => {
    setExpanded(!expanded);
  };

  const getSelectDisplayText = () => {
    if (multiSelect && value.length > 0) {
      return value.join(", ");
    } else if (!multiSelect && value) {
      return value;
    }
    return placeholder;
  };

  return (
    <div
      className="dropdown"
      tabIndex={0}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      <div className={`dropdown-container ${isFocused ? "focused" : ""}`}>
        <div onClick={handleSelectClick} className="dropdown-select">
          <div className="dropdown-select-text">{getSelectDisplayText()}</div>
          <div className={expanded ? "rotate" : ""}>
            <Icon />
          </div>
        </div>
        {expanded && multiSelect && (
          <MultiSelect
            selectedValues={value}
            setSelectedValues={onChange}
            setExpanded={setExpanded}
            options={options}
          />
        )}
        {expanded && !multiSelect && (
          <SingleSelect
            selectedValue={value}
            setSelectedValue={onChange}
            setExpanded={setExpanded}
            options={options}
          />
        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  multiSelect: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func,
};
