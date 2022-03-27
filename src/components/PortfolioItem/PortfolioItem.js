import "./PortfolioItem.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import DropdownInfo from "../UI/DropdownInfo/DropdownInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function portfolioItem(props) {
  return (
    <div className="portfolioItem">
      <Thumbnail
        width={props.imageWidth}
        height={props.imageHeight}
        className="thumbnail"
        image={props.image}
        link={props.link ? props.link : null}
      />
      {props.github ? (
        <h3>
          Github: <a href={props.github}>{props.title}</a>
        </h3>
      ) : null}
      <DropdownInfo
        title={props.title}
        content={props.content}
        noToggle
        show={true}
      />
      <FontAwesomeIcon icon="angle-right" />
      <a href={props.projectRoute}> Read more about this project </a>
      <FontAwesomeIcon icon="angle-left" />
    </div>
  );
}

export default portfolioItem;
