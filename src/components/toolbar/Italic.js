/******************************************
 *  Author : Esten Grove
 *  Created On : Fri Apr 05 2019
 *  File : Italic.js
 *******************************************/
import React from "react";

export default class Italic extends React.Component {
  render() {
    return (
      <div className="tool-btn">
        <svg className="icon">
          <use xlinkHref="./assets/sprite.svg#icon-format_italic" />
        </svg>
      </div>
    );
  }
}