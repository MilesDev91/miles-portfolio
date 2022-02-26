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
          <h2>Application structure/Data flow</h2>
          <p>
            I really wanted to structure my application to retrieve and send
            data from views, using a vuex store as my single source of truth.
            Any components that are used in the views themselves receive and
            pass data from and to their parent view components. I did this to
            ensure data was flowing in a predictable direction.
          </p>
          <h2>Posts</h2>
          <p>
            Posts are fairly straight forward. They are currently needed in two
            variations, grouped and non-grouped.
          </p>
          <h2>Comments</h2>
          <p>
            Comments are a bit of a different beast, primarily because I want to
            create trees of comments instead of all comments branching straight
            from the post. My current plan is to use a v-for loop to recursively
            loop through comments, passing down an incremental indent value to
            visually represent children of comments. This is currently the
            biggest challenge of this project.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
