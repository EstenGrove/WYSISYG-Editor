import React from "react";
import PropTypes from "prop-types";
export default class LiveOutput extends React.Component {
  render() {
    return (
      <div
        className="live-output"
        dangerouslySetInnerHTML={{ __html: this.props.receiveUserInput }}
      />
    );
  }
}

LiveOutput.propTypes = {
  receiveUserInput: PropTypes.string
};
