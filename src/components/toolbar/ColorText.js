import React from "react";
export default class ColorText extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_color_text" />
        </svg>
      </div>
    );
  }
}
