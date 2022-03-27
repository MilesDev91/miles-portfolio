import { Component } from "react";
import "./contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contact">
          <div>
            <h2>If you would like to get in touch:</h2>
            <div className="info">
              <p>
                <strong>Email:</strong> micoffin91@gmail.com
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                linkedin.com/in/miles-coffin-b29bb6149/
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
