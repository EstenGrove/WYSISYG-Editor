import React from "react";
export default class ChangeFont extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg class="icon">
          <use xlinkHref="./assets/sprite.svg#icon-title" />
        </svg>{" "}
      </div>
    );
  }
}
