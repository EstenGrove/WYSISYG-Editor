import React from "react";
export default class Images extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-photo_size_select_actual" />
        </svg>
      </div>
    );
  }
}
