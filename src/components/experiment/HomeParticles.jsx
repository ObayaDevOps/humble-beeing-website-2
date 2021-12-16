import React, { Component } from "react";

import Particles from 'react-tsparticles';
import { Segment } from "semantic-ui-react";


/** Let this be used for learning and experimentation */




class HomeParticles extends Component {
    render() {
      return (
		  <Segment>
              
			{/* //https://github.com/matteobruni/tsparticles/blob/master/components/react/README.md	   */}
			<Particles
				options={{
				background: {
					color: {
					value: "#e6ba0e",
					},
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: "canvas",
					events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "push",
					},
					resize: true,
					},
					modes: {
					bubble: {
						distance: 100,
						duration: 2,
						opacity: 0.8,
						size: 40,
					},
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
					},
				},
				particles: {
					color: {
					value: "#ffffff",
					},
					links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
					},
					collisions: {
					enable: true,
					},
					move: {
					//   angle: 90,
					//   attract : {
					// 	  enable: true,
					// 	  rotate : {
					// 		  x: 600,
					// 		  y: 1200
					// 	  }
					//   },
					direction: "none",
					enable: true,
					outMode: "bounce",
					random: false,
					speed: 10,
					straight: false,
					},
					number: {
					density: {
						enable: true,
						value_area: 350,
					},
					value: 80,
					},
					opacity: {
					value: 0.5,
					},
					shape: {
						// image: {
						// 	height: 100,
						// 	replaceColor: false,
						// 	src: "http://127.0.0.1:8887/beeicon.png", //TO serve this image while on dev, start a 'WebServer for Chrome' - https://stackoverflow.com/questions/39007243/cannot-open-local-file-chrome-not-allowed-to-load-local-resource
						// 	width: 100
						// },
					type: "circle", //image
					
					},
					size: {
					random: true,
					value: 20,
					},
				},
				detectRetina: true,
				}}
			/>		
		  </Segment>
      )}
}

  export default HomeParticles;