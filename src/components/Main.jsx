// import React, { Component } from "react";
// import { Switch, Route, HashRouter } from "react-router-dom";

// // import { Menu, Image, Header, Dropdown, Icon, Sidebar, Segment } from 'semantic-ui-react';

// // import Home from './components/HomeParticles';
// // import Home from './HomeParallax';
// import Home from './HomeForest';

// import Shop from './Shop';
// import Contact from './Contact';
// import Donate from './Donate';
// import Blog from './Blog';

// //Create a 'Honey Tracker : shows the location of all our hives'

// //Links: 
// //https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm


// export default class Main extends Component {
//     state = {}
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name });
//     // const [sidebarVisible, setSidebarVisible] = React.useState(false);

//     componentDidMount() {
//       window.onbeforeunload = function () {
//         window.scrollTo(0, 0);
//       }
//     }


//   render() {
//     const { activeItem } = this.state;

//     return (
//         <HashRouter>
//           {/* Can I insert the Grid Here ? */}
//           {/* Also need a way to start scrolling and then switch menu to the sidebar -  */}
//               {/* <Menu  inverted stackable size='medium' fixed='top'>
//                 <Menu.Item name="home" header   position="right" onClick={this.handleItemClick}>
//                   <NavLink exact to="/">
//                   <Header as='h4' color='yellow' >Home</Header>
//                   </NavLink>
//                 </Menu.Item>
//                 <Menu.Item name="blog" active={activeItem == 'blog'} onClick={this.handleItemClick} >
//                   <NavLink to="/blog">
//                     <Header as='h4' color='yellow' >Blog</Header>
//                   </NavLink>
//                 </Menu.Item>
//                 <Menu.Item name="donate" active={activeItem == 'donate'}  color='yellow' onClick={this.handleItemClick}>
//                   <NavLink to="/donate">
//                     <Header as='h4'>Get Involved!</Header>
//                   </NavLink>
//                 </Menu.Item>
//                 <Menu.Item name="shop" active={activeItem == 'shop'} onClick={this.handleItemClick}>
//                   <NavLink to="/shop">
//                     <Header as='h4' color='yellow'>Shop</Header>
//                   </NavLink>
//                 </Menu.Item>
//                   <Dropdown color='yellow' item text='Contact Us' floating>
//                     <Dropdown.Menu>
//                     <Dropdown.Item>
//                         <Icon name='mail' /> Email
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <Icon name='phone' /> Phone
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <Icon name='facebook' /> Facebook
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <Icon name='instagram' /> Instagram
//                       </Dropdown.Item>      
//                     </Dropdown.Menu>
//                   </Dropdown>
//               </Menu>
//      */}
//             {/* A <Switch> looks through its children <Route>s and
//                 renders the first one that matches the current URL. */}
//             <Switch>
//               <Route path="/shop" component={Shop} />
//               <Route path="/contact" component={Contact} />
//               <Route exact path="/donate" component={Donate} />
//               <Route exact path="/blog" component={Blog} />
//               <Route exact path="/" component={Home} />
//             </Switch>
//         </HashRouter>
//       );
//   }

// }
