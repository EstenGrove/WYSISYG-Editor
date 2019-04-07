import React from "react";

export default class ChangeTheme extends React.Component {
  render() {
    return (
      <div className="switchWrapper">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"> </span>
        </label>
        <p style={{ fontSize: ".4rem", marginTop: "-1rem", color: "#aaa" }}>
          Change Theme
        </p>
      </div>
    );
  }
}
