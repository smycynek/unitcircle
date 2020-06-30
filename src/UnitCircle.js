import React from "react";
import "./App.css";
import roundTwo from "./utility";

const UnitCircle = (props) => {
  const positionFromRadians = (radians) => {
    const x = Math.cos(radians);
    const y = Math.sin(radians);
    const z = Math.tan(radians);
    return [x, y, z];
  };
  const radians = (Math.PI / 180) * props.degrees;
  const pos = positionFromRadians(radians);
  const xoff = pos[0] * 75;
  const yoff = pos[1] * 75;

  const points = `100, 100 ${xoff + 100}, ${100 - yoff} ${
    xoff + 100
  }, 100 100,100`;

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <circle
          cx="100"
          cy="100"
          r="75"
          stroke="black"
          strokeWidth="2"
          fill="lightgreen"
        />

        <polyline
          name="xaxis"
          points="25,100 175,100"
          strokeWidth="2"
          fill="none"
          stroke="black"
          strokeDasharray="4"
        />
        <polyline
          name="yaxis"
          points="100,25 100,175"
          strokeWidth="2"
          fill="none"
          stroke="black"
          strokeDasharray="4"
        />
        <polyline
          points={points}
          strokeWidth="2"
          fill="red"
          fillOpacity="50%"
          stroke="red"
          strokeOpacity="75%"
        />
      </svg>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <span className="text-dark">
              sin({props.degrees})={roundTwo(pos[1])}{" "}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <span className="text-dark">
              cos({props.degrees})={roundTwo(pos[0])}{" "}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <span className="text-dark">
              tan({props.degrees})={roundTwo(pos[2])}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCircle;
