import React from "react";
import Editor from "./Editor";
import Toolbar from "./Toolbar";
import ChangeTheme from "./ChangeTheme";
import LiveOutput from "./LiveOutput";
import SquareMenu from "./toolbar/SquareMenu";

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
      isLink: false,
      isSelected: false,

      textInput: "",
      textOutput: ""
    };
  }
  // Handles the user input and conversion to markdown, then sends the output to the 'LiveOutput' component
  handleUserInput = e => {
    const Showdown = require("showdown");
    const Converter = new Showdown.Converter();
    this.setState({
      textInput: e.target.value
    });
    Converter.setFlavor("github");
    Converter.setOption("simpleLineBreaks", true);
    Converter.setOption("noHeaderId", true);
    Converter.setOption("tables", true);
    Converter.setOption("ghCodeBlocks", true);
    Converter.setOption("tasklists", true);
    Converter.setOption("smoothLivePreview", true);
    Converter.setOption("smartIndentationFix", true);
    const html = Converter.makeHtml(this.state.textInput);

    this.setState({
      textOutput: html
    });
    console.log(this.state.textOutput);
  };
  makeBold = () => {
    console.log("bold");
  };

  clearText = () => {
    console.log("clicked");
    this.setState({
      textInput: ""
    });
  };
  // Handles the opening and closing of the menu
  handleMenu = () => {
    console.log("Menu clicked!");
  };
  render() {
    const {
      isBold,
      isItalic,
      isUnderlined,
      isAlignedLeft,
      isAlignedRight,
      isJustified,
      hasBulletList,
      hasNumberList,
      hasImage,
      isLink
    } = this.state;

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
          <SquareMenu openMenu={this.handleMenu} />
        </div>
        <Toolbar
          makeBold={this.makeBold}
          boldStatus={isBold}
          italicStatus={isItalic}
          underlineStatus={isUnderlined}
          alignedLeftStatus={isAlignedLeft}
          alignedRightStatus={isAlignedRight}
          justifyStatus={isJustified}
          bulletListStatus={hasBulletList}
          numListStatus={hasNumberList}
          imageStatus={hasImage}
          linkStatus={isLink}
          clearText={this.clearText}
        />
        <Editor handleUserInput={this.handleUserInput} />
        <h4 style={{ color: "#aaa", textDecoration: "underline" }}>
          Live Preview
        </h4>
        <LiveOutput receiveUserInput={this.state.textOutput} />
      </div>
    );
  }
}
