import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../routes/home/home";
import Portfolio from "../routes/portfolio/portfolio";
import Contact from "../routes/contact/contact";
import LovingSitter from "../routes/portfolio/lovingsitter/lovingsitter";
import TalkGaming from "../routes/portfolio/talkgaming/talkgaming";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  constructor(props) {
    super(props);
    if (typeof window !== "undefined") {
      document.title = "Miles Applications";
    }
  }

  render() {
    return (
      <div id="app">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about-me/" element={<Home />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/portfolio/lovingsitter" element={<LovingSitter />} />
          <Route path="/portfolio/talkgaming" element={<TalkGaming />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  }
}
