import React from "react";

export default class GetCode extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-code" />
        </svg>{" "}
      </div>
    );
  }
}
