import React from "react";
import {  Image, Transition, Visibility, Segment, Container, Responsive, Header, Input, Button, Divider} from "semantic-ui-react";
import PropTypes from "prop-types";



export default class AnimationLogoImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    componentDidMount() {
        this.toggleVisibility();
    }      
    
    

    toggleVisibility = () => 
        this.setState( {visible: true})
    
    
    render() {
        const { visible } = this.state;

        return (
            <Segment
            inverted
            fluid
            textAlign="center"
            style={{ 
                minHeight: '100vh', 
                padding: window.screen.width <= Responsive.onlyMobile.maxWidth ? "0em": "3em" }}
            vertical
          >
            <Visibility
                once={false}
                // onPassing={this.toggleVisibility}
            >
                <Transition visible={visible} unmountOnHide={true} animation='fly up' duration={1200} transitionOnMount={false}>
                    <Image 
                        size='huge'
                        centered='true'
                        style={{ paddingTop: window.screen.width <= Responsive.onlyMobile.maxWidth ? "7em" : "0em" }} 
                        src={require('../../assets/logos/Logo-with-words-TRANSPARENT.PNG')} 
                    />
                </Transition>

                <Transition visible={visible}  unmountOnHide={false} animation='fly up' duration={1200} transitionOnMount={true}>
                    <Container>
                        <Image 
                            size='medium'
                            centered='true' 
                            src={require('../../assets/logos/logo-tagline-trans.PNG')} 
                            style={{ padding: "1em 0em" }} 

                        />
                        <Input size="big" icon="mail" inverted placeholder='Email ...' />
                        <Divider hidden />
                        <Button>Sign Up for Honey Drops !</Button>
                    </Container>
                </Transition>

                <Transition visible={visible}  unmountOnHide={false} animation='fly up' duration={1250} transitionOnMount={true}>
                    <Container>
                    {/* <Image 
                            size='small'
                            centered='true' 
                            style={{ paddingBottom: "1.5em" }} 

                            src={require('../assets/icons/scroll-down-TRANS.PNG')} 
                        /> */}
                    <Image 
                            size='mini'
                            centered='true' 
                            hidden={window.screen.width <= Responsive.onlyTablet.maxWidth}
                            src={require('../../assets/icons/small-arrow-Trans.PNG')} 
                        />
                    </Container>
                </Transition>
                </Visibility>
                </Segment>


        );
    }
}