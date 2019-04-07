import React from "react";

export default class Lists extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_list_bulleted" />
        </svg>
      </div>
    );
  }
}
