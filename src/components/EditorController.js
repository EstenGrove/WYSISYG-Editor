import React from "react";
import Editor from "./Editor";
import Toolbar from "./Toolbar";
import ChangeTheme from "./ChangeTheme";

export default class EditorController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBold: false,
      isItalic: false,
      isUnderlined: false,
      isAlignedLeft: false,
      isAlignedRight: false,
      isJustified: false,
      hasBulletList: false,
      hasNumberList: false,
      hasImage: false,
      isLink: false
    };
  }
  render() {
    return (
      <div className="editor-controller">
        <div className="Title-Wrapper">
          <h1 className="Title">
            <b style={{ color: "#5c75ea" }}>W</b>
            <b style={{ color: "#ecc536" }}>Y</b>
            <b style={{ color: "#4ad8bb" }}>S</b>
            <b style={{ color: "#d842a3" }}>I</b>
            <b style={{ color: "#e33540" }}>W</b>
            <b style={{ color: "#00B7FF" }}>Y</b>
            <b style={{ color: "#e84855" }}>G</b>
            <b style={{ color: "#666" }}> Editor</b>
          </h1>
          <ChangeTheme />
        </div>
        <Toolbar />
        <Editor />
      </div>
    );
  }
}
