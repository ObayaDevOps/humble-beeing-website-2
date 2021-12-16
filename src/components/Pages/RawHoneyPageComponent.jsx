import React, { Component } from "react";
import FooterContainer from '../FooterContainer';


const PageContent = () => (
  <div style={{ minHeight:"100vh"}}>
  <h1 style={{ paddingTop: "3.5em"}}>This about the benefits of Raw Honey !</h1>
  <p>Cras facilisis urna ornare ex volutpat, et
  convallis erat elementum. Ut aliquam, ipsum vitae
  gravida suscipit, metus dui bibendum est, eget rhoncus nibh
  metus nec massa. MaecenARGAsregGerit laoreet augue
  nec molestie. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>

  <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
</div>

);

class RawHoneyPageComponent extends Component {
    render() {
      return (
        <div>
          <PageContent />
          <FooterContainer />
        </div>

      );
    }
  }
   
  export default RawHoneyPageComponent;