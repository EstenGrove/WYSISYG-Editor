import React from "react";
export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon trash" onClick={this.props.clearText}>
          <use xlinkHref="./assets/sprite2.svg#icon-trash" />
        </svg>{" "}
      </div>
    );
  }
}
