import { Component } from "react";
import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="portfolio">
          <h1>
            <FontAwesomeIcon icon="folder-open" /> Portfolio <br />
            <hr />
          </h1>
          <div className="portfolioItems">
            <PortfolioItem
              imageWidth="400"
              imageHeight="300"
              image="https://s3.amazonaws.com/miles-portfolio.com/assets/image/TalkGaming.png"
              link="https://talk-gaming.herokuapp.com/#/"
              title="Talk Gaming"
              content="This is a gaming forum I am creating in Vue. I made it particularly to practice database management with Firestore and hone my UI and UX design skills."
              github="https://github.com/MilesDev91/talkgaming"
              projectRoute="/portfolio/talkgaming"
            />
            <PortfolioItem
              imageWidth="400"
              imageHeight="300"
              image="https://s3.amazonaws.com/miles-portfolio.com/assets/image/lovingsitter.png"
              link="https://loving-sitter-client.herokuapp.com/"
              title="Loving Sitter"
              content="Loving sitter is a group project designed to bring pet sitters and owners together in a specialized marketplace. It uses React, Express, MongoDB, Node.js, and MUI(Material UI for React)."
              github="https://github.com/hatchways/team-pine"
              projectRoute="/portfolio/lovingsitter"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
