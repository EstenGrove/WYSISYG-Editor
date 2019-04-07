import React from "react";
export default class AlignLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_align_left" />
        </svg>
      </div>
    );
  }
}
