import { Component } from "react";
import "./DropdownInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DropdownInfo extends Component {
  state = {
    show: this.props.show,
  };

  showHandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    let dropdownContent;

    let buttonIcon = <FontAwesomeIcon icon="angle-right" />;

    if (this.state.show) {
      dropdownContent = <p>{this.props.content}</p>;
      buttonIcon = <FontAwesomeIcon icon="angle-down" />;
    }

    let title;

    if (this.props.noToggle) {
      title = <h2 style={{ cursor: "default" }}>{this.props.title}</h2>;
    } else {
      title = (
        <h2 onClick={this.showHandler}>
          {this.props.title} {buttonIcon}
        </h2>
      );
    }

    return (
      <div className="dropdownInfo">
        {title}
        {dropdownContent}
      </div>
    );
  }
}

export default DropdownInfo;
