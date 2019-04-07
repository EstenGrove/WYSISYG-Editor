import React from "react";
import PropTypes from "prop-types";
export default class LiveOutput extends React.Component {
  render() {
    return (
      <textarea className="live-output" value={this.props.receiveUserInput}>
        {" "}
      </textarea>
    );
  }
}

LiveOutput.propTypes = {
  receiveUserInput: PropTypes.string
};
