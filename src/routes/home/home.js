import { Component } from 'react';
import './home.css';

import Carousel from '../../components/Carousel/Carousel.js';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import withResizeHandler from '../../hoc/withResizeHandler';

const imgArray = ['https://s3.amazonaws.com/miles-portfolio.com/assets/image/Initial.jpeg', 'https://s3.amazonaws.com/miles-portfolio.com/assets/image/Second.png', 'https://s3.amazonaws.com/miles-portfolio.com/assets/image/Third.jpeg']
const imgText = ['Every site has its unique challenges, and each can be overcome.', 'React.js transforms any website into a smooth experience.', 'Success through communication.']

class Home extends Component {

	render () {
		let images = imgArray.map((img, index) => (
			<div className="crop" key={img}>
				<div className="overlay" />
				<img className="smallImage" src={img} alt="" />
				<div className="imgText">
					{imgText[index]}
				</div>
			</div>
		));

		if (typeof window !== 'undefined') {
			if (window.matchMedia('(min-width: 600px)').matches) {
				images = <div><Carousel images={imgArray} animationTiming={500} /></div>;
			}
		}

		return (
			<div>
				<Header />
				<div className="home">
					{images}
					<div className="information">
						<div className="infoItem">
							<h1>About Me</h1>
							<p>Hello, I am a junior web developer who is quickly gaining practical experience with my own projects. I have always loved computers, and being a web developer makes that love even stronger. I am very resourceful when it comes to solving problems, and I don't give up easily. If I don't find a solution elsewhere, then I create one myself.</p>
						</div>
						<div className="infoItem">
							<h1>Skills</h1>
							<p>These are some of the various skills I have become familiar with so far. I have left out a bunch of things that I have come across but not used more than once or twice. Visit the <a href="/portfolio">portfolio page</a> to see how I used these skills in my projects. I am currently working on more original projects to better showcase my knowlege of these.</p>
							<ul>
								<li><strong>HTML, CSS, and Javascript</strong></li>
								<p>The building blocks of the web. I am very familiar with these by now.</p>
								<li><strong>Vue</strong></li>
								<p>Vue.js is a powerful javascript framework that combines html and javascript into a well oiled machine. I love Vue for how sensible and powerful it is. This is what I make most of my projects in.</p>
								<li><strong>React</strong></li>
								<p>React is an awesome component based Node.js library/framework. It is what lead me to learning Vue, and it is a powerful framework in its own right. I would certainly not mind working with React if given the chance.</p>
								<li><strong>PHP</strong></li>
								<p>I am not greatly familiar with PHP, but I understand its concepts somewhat. I prefer client-side languages, but I would not be uncomfortable working with it, especially since it has good documentation.</p>
								<li><strong>Git and Github</strong></li>
								<p>Git is a version control system that is very useful for tracking and controlling changes to your app. I use it with every project I do and have become very familiar with how it works.</p>
								<li><strong>NPM</strong></li>
								<p>NPM (Node Package Manager) is a vast package manager for the Node.js javascript runtime.</p>
								<li><strong>Databases</strong></li>
								<p>I have knowledge of working with relational and non-relational databases. I am particularly familiar with Firebase at this point.</p>
								<li><strong>Wordpress</strong></li>
								<p>I have used wordpress in the past, and I would like to further explore wordpress with custom php modification.</p>
							</ul>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withResizeHandler(Home);
