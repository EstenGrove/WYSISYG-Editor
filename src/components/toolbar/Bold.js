import React from "react";

export default class Bold extends React.Component {
  render() {
    const svg = "#align-center";
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_bold" />
        </svg>
      </div>
    );
  }
}
