import React from "react";
export default class NumberList extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_list_numbered" />
        </svg>
      </div>
    );
  }
}
