import { Component } from "react";
import "./home.css";
import "../../style/index.css";
import aboutMeImg from "../../assets/image/aboutme.jpg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import withResizeHandler from "../../hoc/withResizeHandler";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home page-container">
          <div className="information">
            <div className="aboutMe">
              <img
                alt="Miles Coffin"
                className="aboutMeImage"
                src={aboutMeImg}
              />
              <div className="aboutMeInfo">
                <h1>About Me</h1>
                <p>
                  Hello, I am a web developer who is quickly gaining practical
                  experience with my own projects. I have always loved
                  computers, and being a web developer makes that love even
                  stronger. I am very resourceful when it comes to solving
                  problems, and I don't give up easily. If I don't find a
                  solution elsewhere, then I create one myself.
                </p>
              </div>
            </div>
            <div className="infoItem">
              <h1>Skills</h1>
              <p>
                These are some of the various skills I have become familiar with
                so far. Visit the <a href="/portfolio">portfolio page</a> to see
                how I used these skills in my projects. I am currently working
                on more original projects to better showcase my knowlege of
                these.
              </p>
              <ul>
                <li>
                  <h2 className="skillTitle">HTML, CSS, and Javascript</h2>
                  <p>The building blocks of the web.</p>
                </li>
                <li>
                  <h2 className="skillTitle">Vue</h2>
                  <p>
                    Vue.js is a great javascript framework that combines HTML
                    and javascript into Vues. Shares some of the same ideas as
                    React, especially with component modularity.
                  </p>
                </li>
                <li>
                  <h2 className="skillTitle">React</h2>
                  <p>
                    React.js is a powerful component based Node.js library.
                    React is designed with well-controlled state in mind, and it
                    has great TypeScript support.
                  </p>
                </li>
                <li>
                  <h2 className="skillTitle">Git and Github</h2>
                  <p>
                    Git is a version control system that is very useful for
                    tracking and controlling changes to your app.
                  </p>
                </li>
                <li>
                  <h2 className="skillTitle">MongoDB</h2>
                  <p>
                    MongoDB is one of the most popular non-relational databases
                    out there, and for good reason. Mongoose allows for easy
                    creation of models that structure the data for your
                    application. It also has a plethora of built-in features and
                    extensive documentation.
                  </p>
                </li>
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
