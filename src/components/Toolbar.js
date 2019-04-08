import React from "react";
import Bold from "./toolbar/Bold";
import Italic from "./toolbar/Italic";
import Underline from "./toolbar/Underline";
import BulletLists from "./toolbar/BulletLists";
import NumberList from "./toolbar/NumberList";
import JustifyText from "./toolbar/JustifyText";
import AlignLeft from "./toolbar/AlignLeft";
import AlignRight from "./toolbar/AlignRight";
import ColorText from "./toolbar/ColorText";
import Link from "./toolbar/Link";
import Images from "./toolbar/Images";
import FontSize from "./toolbar/FontSize";
import GetCode from "./toolbar/GetCode";
export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <Bold />
        <Italic />
        <Underline />
        <FontSize />
        <ColorText />
        <BulletLists />
        <NumberList />
        <AlignLeft />
        <JustifyText />
        <AlignRight />
        <Link />
        <Images />
        <GetCode />
      </div>
    );
  }
}
