import React from "react";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <textarea className="editor" placeholder="Start typing..." />;
  }
}
