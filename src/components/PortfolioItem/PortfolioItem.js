import './PortfolioItem.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DropdownInfo from '../UI/DropdownInfo/DropdownInfo';

const portfolioItem = (props) => (
    <div className='portfolioItem'>
        <Thumbnail width={props.imageWidth} height={props.imageHeight} className='thumbnail' image={props.image} link={props.link} />
        <DropdownInfo title={props.title} content={props.content} show={false} />
    </div>
);

export default portfolioItem;