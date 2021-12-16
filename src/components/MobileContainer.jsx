
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Sticky,
  Transition,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { Switch,HashRouter, BrowserRouter, Link, Route, NavLink } from "react-router-dom";
import { HomepageHeading } from './HomeForest';
import AnimationLogoImage from '../components/LandingPage/AnimationLogoImage';
import { HomepageContentContainer } from '../components/LandingPage/HomepageContentContainer';


export default class MobileContainer extends Component {
    state = {};
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state;
  
      if (sidebarOpened) this.setState({ sidebarOpened: false });
    };
  
    handleToggle = () =>
      this.setState({ sidebarOpened: !this.state.sidebarOpened });
  
    render() {
      const { children } = this.props;
      const { sidebarOpened } = this.state;
  
      return (
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar.Pushable>
                <Sidebar
                as={Menu}
                animation="uncover"
                inverted
                vertical
                visible={sidebarOpened}
                >
                    <Menu.Item as="a" active>
                        Home
                    </Menu.Item>
                    <Menu.Item 
                      href='https://medium.com/@humble-beeing' target='_blank'
                      name='blog' 
                    >Blog</Menu.Item>
                    <Menu.Item as="a">Shop</Menu.Item>
                    <Menu.Item as="a">Contact Us</Menu.Item>
                </Sidebar>
  
                <Sidebar.Pusher
                dimmed={sidebarOpened}
                onClick={this.handlePusherClick}
                style={{ minHeight: "100vh", minWidth: "100vw" }}
                >
                    <Segment
                        inverted
                        textAlign="center"
                        // style={{ minHeight: "100vh", padding: "1em 0em" }}
                        vertical
                    >
                        <Container >
                        <Menu inverted pointing secondary size="large">
                            <Menu.Item onClick={this.handleToggle}>
                            <Icon name="sidebar" />
                            </Menu.Item>
                        </Menu>
                        </Container>
                        
                        {/* <AnimationLogoImage /> */}
                    </Segment>

                    <HomepageContentContainer />
                </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      );
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node
  };
  