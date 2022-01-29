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
            {/* <PortfolioItem
              imageWidth="400"
              imageHeight="300"
              image="https://s3.amazonaws.com/miles-portfolio.com/assets/image/JnsMetals.png"
              link="https://jnsmetalart.com"
              title="JnS Metal Art"
              content="JnS Metals is a live production app that I made for family. When business needs pick up production of the app will continue (or transition to another platform if appropriate), in which full e-commerce functionality is intended. It is hosted by Inmotion and uses Amazon S3 and a Firebase realtime database for its data."
              github="https://github.com/MilesDev91/snjmetals"
            /> */}
            <PortfolioItem
              imagewidth="400"
              imageHeight="300"
              image="https://s3.amazonaws.com/miles-portfolio.com/assets/image/TalkGaming.png"
              title="Loving Sitter"
              content="Loving sitter is a group project designed to bring pet sitters and owners together in a specialized marketplace. It uses React, Express, MongoDB, Node.js, and MUI(Material UI for React)."
              github="https://github.com/hatchways/team-pine"
            />
            <PortfolioItem
              imageWidth="400"
              imageHeight="300"
              image="https://s3.amazonaws.com/miles-portfolio.com/assets/image/TalkGaming.png"
              link="https://talk-gaming.herokuapp.com/#/"
              title="Talk Gaming"
              content="This is a gaming forum I am creating in Vue. It will eventually have a small set of features that most forums have. I made it particularly to practice database management with Firestore and hone my UI and UX design skills."
              github="https://github.com/MilesDev91/talkgaming"
            />
            {/* <PortfolioItem
              imageWidth="400"
              imageHeight="300"
              image="https://s3.amazonaws.com/miles-portfolio.com/assets/image/SudokuSolver.png"
              link="https://talk-gaming.https://solve-sudoku-application.herokuapp.com/.com/#/"
              title="Sudoku Solver"
              content="This is a bit of a double hobby project that I thought would be good practice for algorithm and basic UI development. It is made in Vue as well. It currently has basic input and validity checking functionality, and I intend to give it a nice solving feature set that is unique to other sudoku apps."
              github="https://github.com/MilesDev91/sudokusolver"
            /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
