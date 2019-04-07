import React from "react";
export default class Link extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-link" />
        </svg>{" "}
      </div>
    );
  }
}
