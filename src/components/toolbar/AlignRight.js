import React from "react";
export default class AlignRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tool-btn">
        <svg class="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_align_right" />
        </svg>
      </div>
    );
  }
}
