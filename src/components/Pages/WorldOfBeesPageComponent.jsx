import React, { Component } from "react";
import FooterContainer from '../FooterContainer';


const PageContent = () => (
  <div>
    <h1 style={{ paddingTop: "3.5em", minHeight:"100vh"}}>World of Bees - Lots of information about Bees</h1>
    <p>An experiment in creating educational content</p>

</div>

);

class WorldOfBeePageComponent extends Component {
    render() {
      return (
        <div>
          <PageContent />
          <FooterContainer />
        </div>

      );
    }
  }
   
  export default WorldOfBeePageComponent;