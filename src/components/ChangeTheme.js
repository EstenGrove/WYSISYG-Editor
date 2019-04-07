import React from "react";

export default class ChangeTheme extends React.Component {
  render() {
    return (
      <div className="switchWrapper">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"> </span>
        </label>
        <p style={{ fontSize: ".4rem", marginTop: "-1rem", color: "#aaa" }}>
          Change Theme
        </p>
      </div>
    );
  }
}
