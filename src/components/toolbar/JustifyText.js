import React from "react";
export default class JustifyText extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg class="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_align_justify" />
        </svg>{" "}
      </div>
    );
  }
}
