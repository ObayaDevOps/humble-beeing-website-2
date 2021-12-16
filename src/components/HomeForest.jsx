import React, { Component } from "react";
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

import "semantic-ui-css/semantic.min.css";

//https://github.com/semantic-ui-forest/forest-templates/blob/master/semantic-ui/homepage/react/src/App.jsx


export default class HomepageLayout extends Component { 
  //Seems to be ineffectual
  // componentDidMount() {
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   }
  // }

  render() {
    return (
      <div style={{ backgroundColor:"#FFFFFF"}}>
        <DesktopContainer />
        <MobileContainer />
      </div>
    );
  }

}
