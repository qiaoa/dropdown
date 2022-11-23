import React, { useState } from "react";
import { Dropdown } from "./components/Dropdown/Dropdown";
import "./App.css";

const options = [
  {
    label: "test option that is really really long and spans two rows",
    value: "0",
  },
  { label: "Test 1", value: "1" },
  { label: "Test 2", value: "2" },
  { label: "Test 3", value: "3" },
  { label: "Test 4", value: "4" },
  { label: "Test 5", value: "5" },
  { label: "Test 6", value: "6" },
  { label: "Test 7", value: "7" },
  { label: "Test 8", value: "8" },
];

function App() {
  const [singleSelectValue, setSingleSelectValue] = useState("");
  const [multiSelectValues, setMultiSelectValues] = useState([]);

  return (
    <div className="App">
      <div>
        <div className="label">Single Select Example</div>
        <Dropdown
          options={options}
          placeholder={"select"}
          multiSelect={false}
          value={singleSelectValue}
          onChange={setSingleSelectValue}
        />
      </div>

      <div>
        <div className="label">Multi Select Example</div>
        <Dropdown
          options={options}
          placeholder={"select"}
          multiSelect={true}
          value={multiSelectValues}
          onChange={setMultiSelectValues}
        />
      </div>
    </div>
  );
}

export default App;
