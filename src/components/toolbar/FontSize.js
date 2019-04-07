import React from "react";
export default class FontSize extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-text_fields" />
        </svg>
      </div>
    );
  }
}
