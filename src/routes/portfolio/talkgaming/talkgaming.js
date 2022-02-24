import { Component } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./talkgaming.css";

export default class TalkGaming extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="talkgaming-container">
          <h1>Talk Gaming</h1>
          <p>
            Talk Gaming is a personal project of mine made in Vue. I went into
            this project with the desire to strengthen my knowledge of Firestore
            and hone my UI design skills. Designing a UI without a CSS framework
            has been more of a challenge than I originally anticipated.
          </p>
          <p>
            One important lesson that was reinforced during this project was
            that reinventing the wheel often isn't necessary. Using bootstrap or
            material would have ended up in a much better looking site, but that
            is fine. This was meant to be an exercise more than a proof of
            concept or anything like that.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
