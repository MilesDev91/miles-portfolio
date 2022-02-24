import { Component } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./lovingsitter.css";

export default class LovingSitter extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="lovingsitter-container">
          <div clasName="lovingsitter">
            <h1>Loving Sitter</h1>
            <p>
              This project provides pet owners with access to pet sitters in
              their area and vice versa. It was a group project that primarily
              took place over two weeks, and I was responsible for several
              features throughout. It used the MERN stack with a MVC structure.
              MUI was used as the CSS framework.
            </p>
            <div>
              <h2>Requests</h2>
              <p>
                Requests were used to book appointments with pet sitters. They
                were accessed and created in two places primarily: the bookings
                page and the profile details page.
              </p>
              <h3>Front End</h3>
              <p>
                In the bookings page, sitters can see their appointments in an
                upcoming list format and on a calendar. Because I wanted to save
                time with the calendar, I opted to use react-calendar instead of
                the MUI calendar. React-calendar has methods for easier
                customization and tile styling. This did prove to be a
                challenge, and I wonder if MUI would have been easier in the
                end. It ended up working out, however. I had less familiarity
                with MUI earlier in the project, so that likely influenced my
                choice.
              </p>
              <p>
                The profile details page displays all the information a pet
                owner would need to know about a sitter. Thus, this is the best
                place to make requests. After a user has seen all the
                information they need to know, they can make a decision. This
                page came later in the project, and the styling didn't prove too
                much of a challenge. The real challenge came from the MUI date
                picker, in particular customizing it to match our ideal layout.
              </p>
              <h3>Back End</h3>
              <p>
                Designing the model and controller for requests was an
                interesting challenge, mainly because it was my first exposure
                to mongooose models and schemas. Nonetheless, I became familiar
                with it rather quickly and feel that I designed a solid and
                secure model/controller.
              </p>
              <p>
                The controller is carefully constructed to only allow the proper
                entities to access or change the data, whether it is from our
                front end or not. The logged in user token plays a big role in
                controlling what can be changed. For example, a user can't
                change the status of another user's booking statuses. Their
                token has to match the profile of the statuses they are trying
                to change. The same applies to the paid status, although that
                can only be triggered by accepting a request.
              </p>
              <h2>Reviews</h2>
              <p>
                Reviews are exactly what you expect them to be. They have a
                rating, optional comments, and the profile leaving the review.
              </p>
              <h3>Front End</h3>
              <p>
                Reviews are only really displayed on the profile details page.
                They show up under the request form, and a profile having more
                than three will reveal a button for a modal that displays all
                reviews.
              </p>
              <p>
                Underneath the reviews is the review form. Since only three
                maximum will show up on the page naturally, it is easy to see
                and access for the user.
              </p>
              <h3>Back End</h3>
              <p>
                Reviews have their own model and controller, but they reside
                within profiles themselves as an array. The profile id in the
                review model is for the reviewer.
              </p>
              <p>
                Up until this poing, profile ratings were not implemented, thus
                I had to find a way to add and update these ratings. This might
                be where my lack of familiarity with mongodb shows. In SQL
                databases, I believe there are functions (stored procedures) you
                can write that trigger from data changes. I wasn't sure (and
                couldn't find) if there was something similar with mongodb, so I
                modified the review controller to recalculate the profile rating
                on review creation. This will likely be entirely fine for this
                application, but it would be better to move this to another
                section of our backend as to not slow down review creation
                itself.
              </p>
              <h2>Project Challenges</h2>
              <p>
                This project was my first group project, but that wasn't where
                the real challenge lied. I usually work well with other people,
                and while there were some things I had to learn, I feel I
                adapted well. The real challenge lied in using TypeScript and
                MUI, the former of which I never used with React before, and the
                latter I had no exposure to at all (MUI or material UI)
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
