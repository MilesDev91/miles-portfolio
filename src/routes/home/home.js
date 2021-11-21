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
							<p>These are some of the various skills I have learned so far. Visit the <a href="/portfolio">portfolio page</a> to see how I used these skills in my projects. I am currently working on more original projects to better showcase my knowlege of these.</p>
							<ul>
								<li><strong>HTML, CSS, and Javascript</strong></li>
								<p>It may seem obvious, but having a strong understanding of the basics makes all the difference in the world. Everything I have learned is to make these three things more efficient. Everything relies on them. I can say I have become very familiar with HTML, CSS, and Javascript.</p>
								<li><strong>PHP</strong></li>
								<p>PHP is a server-side scripting language that allows for direct embedding into HTML, allowing for easy dynamic content and data handling right into your design. I am not greatly familiar with PHP, but I understand its sytax and concepts very well.</p>
								<li><strong>MVC</strong></li>
								<p>MVC stands for model-view-controller, and it is a design pattern that seperates an application into the model, the view, and the controller. This allows for easy modification of specific parts of the app since they aren't as tightly integrated. I have limited experience with MVC, but I am taking classes to remedy that.</p>
								<li><strong>React</strong></li>
								<p>React is an awesome component based Node.js library/framework. Knowing how to leverage components to limit rendering on the page can make the user experience seem instantaneous. Combining HTML with Javascript via JSX is also very useful. This is probably my favorite tool to make sites with so far.</p>
								<li><strong>Express</strong></li>
								<p>Express is a popular framework that uses middleware to inject package functionality into the app. It allows for lightweight development of Node.js applications along with very useful tools, like mongoose for local development databases, handlebars for creating templates to inject into your HTML, and passport for handling authentification.</p>
								<li><strong>Git and Github</strong></li>
								<p>Git is a version control system that is very useful for tracking changes to your app. With Git I can maintain different branches of my projects and control flow to the master branch. Github is an online repository for code that has an interface designed with git and version control completely in mind .Combining them both, many people can share seperate versions that can later be merged into the master branch or another branch. Every change can be monitored, and changes can be rolled back if needed.</p>
								<li><strong>NPM</strong></li>
								<p>NPM (Node Package Manager) is a vast package manager for the Node.js javascript runtime. There are thousands upon thousands of packages located here created by some of the smartest people in the industry. Utilizing npm in the command line allows for easy addition of packages (and all of their dependancies) to projects.</p>
								<li><strong>JQuery</strong></li>
								<p>The jQuery library allows for easy dynamic modification of elements on your site. It also does so many things normal Javascript does with much less code, like calling to the server with Ajax.</p>
								<li><strong>Database Connection</strong></li>
								<p>I am not at the stage of knowing how to create my own databases, but I know several different types of databases and how to connect them to my projects, databases such as: phpmyadmin (mySQL), firebase (noSQL), and mLab (mongoDb). I know many of the principles behind relational databases and non-relational databases, how they structure data, and how to use them in development and production.</p>
								<li><strong>Wordpress</strong></li>
								<p>Installing Wordpress onto a website allows for much easier management of site content. It allows admin access to the host and lets them use themes and plugins to create a site without much coding involved. I know how to install and use Wordpress, but not how to create plugins and themes as of yet.</p>
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
