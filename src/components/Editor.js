import React from "react";
import PropTypes from "prop-types";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <textarea
        className="editor"
        placeholder="Start typing..."
        onChange={this.props.handleUserInput}
        defaultValue=""
      />
    );
  }
}

Editor.propTypes = {
  handleUserInput: PropTypes.func
};
