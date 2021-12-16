import React, { Component } from "react";
import {  Image, Grid, Header, Segment, SegmentGroup, Rail, Sticky, Sidebar, Menu, Icon, Button } from "semantic-ui-react";
import About from './About';
import ImageSlider from "../ImageSlider";
import BlogPost from './BlogPost';


//Slide show of ancient/ old beekeeping practices
//invert image colours on hover

class HomeParallax extends Component {
  constructor(props) {
    super(props);
    this.state = {isSidebarVisible: false};

    this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}


  handleSidebarClick() {
    console.log('HANDLE SIDEBAR CLICK');

    this.setState(state => ({
      isSidebarVisible: !state.isSidebarVisible
    }))
  }

// create a button to click to reveaL THE side bar
    render() {
      return (


        <BlogPost />
        // <Grid stackable  padded >
        //   {/* Column 1, this will have the large logo fixed to it */}
        //   <Grid.Column width={3}>
        //     <Sticky position='left'  offset={25}>
        //       <Image src={require('../assets/HB-Blog-trans.PNG')} />
        //       {/* <ImageSlider /> */}

        //     </Sticky>
        //   </Grid.Column>

         
        //   {/* Column 2, this will hold the rest of the page content  */}
        //   {/* In this column we want a lot of rows - organised into segments */}
        //   {/* Next step is to create  */}
        //   <Grid.Column floated='right' width={13}> 
        //   <Grid.Row centered='true'> 
        //     {/* <Segment vertical> */}
        //       {/* <Image src={require('../assets/bees-4845211.jpg')} fluid /> */}
        //       <ImageSlider />
        //     {/* </Segment> */}
            
        //       <Segment vertical>
        //         <Image size='medium' src={require('../assets/Website-text-OurMission-TRANS.PNG')} />
        //         <p>Cras facilisis urna ornare ex volutpat, et
        //           convallis erat elementum. Ut aliquam, ipsum vitae
        //           gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //           metus nec massa. Maecenas hendrerit laoreet augue
        //           nec molestie. Cum sociis natoque penatibus et magnis
        //           dis parturient montes, nascetur ridiculus mus.</p>
        //           <p>Cras facilisis urna ornare ex volutpat, et
        //           convallis erat elementum. Ut aliquam, ipsum vitae
        //           gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //           metus nec massa. Maecenas fzsfzfsaszfhendrerit laoreet augue
        //           nec molestie. Cum sociis natoque penatibus et magnis
        //           dis parturient montes, nascetur ridiculus mus.</p>
        //         <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        //       </Segment>

        //       <Segment vertical >
        //         <Image size='medium' src={require('../assets/our-services-text-TRANS.PNG')} />
        //         <p>Cras facilisis urna ornare ex volutpat, et
        //           convallis erat elementum. Ut aliquam, ipsum vitae
        //           gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //           metus nec massa. Maecenas fzsfzfsaszfhendrerit laoreet augue
        //           nec molestie. Cum sociis natoque penatibus et magnis
        //           dis parturient montes, nascetur ridiculus mus.</p>
        //         <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

        //         <Segment.Group horizontal>
        //           <Segment>
        //             <Header as='h3'> Pure Ugandan Honey </Header>
        //             <p>Cras facilisis urna ornare ex volutpat, et
        //               convallis erat elementum. Ut aliquam, ipsum vitae
        //               gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //               metus nec massa.</p>
        //           </Segment>

        //           <Segment>
        //             <Header as='h3'> Apiary Management </Header>
        //             <p>Cras facilisis urna ornare ex volutpat, et
        //               convallis erat elementum. Ut aliquam, ipsum vitae
        //               gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //               metus nec massa. Maecenas fzsfzfsaszfhendrerit laoreet augue
        //               nec molestie. Cum sociis natoque penatibus et magnis
        //               dis parturient montes, nascetur ridiculus mus.</p>
        //             <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        //           </Segment>

        //           <Segment>
        //             <Header as='h3'> Hive Products </Header>
        //             <p>Cras facilisis urna ornare ex volutpat, et
        //               convallis erat elementum. Ut aliquam, ipsum vitae
        //               gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //               metus nec massa. Maecenas fzsfzfsaszfhendrerit laoreet augue
        //               nec molestie. Cum sociis natoque penatibus et magnis
        //               dis parturient montes, nascetur ridiculus mus.</p>
        //             <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        //           </Segment>

        //           <Segment>
        //             <Header as='h3'> Beekeeper Training </Header>
        //             <p>Cras facilisis urna ornare ex volutpat, et
        //               convallis erat elementum. Ut aliquam, ipsum vitae
        //               gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        //               metus nec massa. Maecenas fzsfzfsaszfhendrerit laoreet augue
        //               nec molestie. Cum sociis natoque penatibus et magnis
        //               dis parturient montes, nascetur ridiculus mus.</p>
        //             <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        //           </Segment>
        //         </Segment.Group>
        //       </Segment>
        //     </Grid.Row>

        //     <Grid.Row>
        //     <Header as='h2'> Meet the Team </Header>
        //       <About />
        //     </Grid.Row>
            
        //   </Grid.Column>

        // </Grid>

      )}
}


  export default HomeParallax;