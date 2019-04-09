import React from "react";
export default class SquareMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu-btn" style={{ display: "flex" }}>
        <svg className="icon" onClick={this.props.openMenu}>
          <use xlinkHref="./assets/sprite2.svg#icon-squared-menu" />
        </svg>
      </div>
    );
  }
}
