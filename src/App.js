import React, { useState } from "react";
import InputNumber from "rc-input-number";
import "rc-input-number/assets/index.css";
import "./App.css";
import roundTwo from './utility';
import UnitCircle from "./UnitCircle";
function App() {
  const [degreeInput, setDegreeInput] = useState(45);
  const handleChangeDegree = (value) => {
    setDegreeInput(value);
  };

  const handleChangeDegreeSlide = (event) => {
    setDegreeInput(event.target.value);
  };

  return (
    <div>
      <h1>Unit Circle Fun</h1>
      <label style={{ padding: 5 }} htmlFor="radians">
        Degrees
      </label>{" "}
      <div>
        <InputNumber
          name="degrees"
          min={0}
          max={360}
          style={{
            borderWidth: "2px",
            borderColor: "black",
            margin: 4,
            padding: 5,
            width: 100,
            height: 40,
          }}
          step={1}
          value={degreeInput}
          onChange={handleChangeDegree}
          usetouch
        />{" "}
       
      </div>
      <div>
        <input
          width="100%"
          onChange={handleChangeDegreeSlide}
          type="range"
          min="0"
          max="360"
          step={1}
          value={degreeInput}
          id="degreeRange"
        />
      </div>
      <div>Radians: {  roundTwo((Math.PI / 180) * degreeInput) }</div>
      <UnitCircle degrees={degreeInput} />
      <hr/>
      <a href="https://github.com/smycynek/unitcircle">https://github.com/smycynek/unitcircle</a>
    </div>
   );
}

export default App;
