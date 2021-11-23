import './PortfolioItem.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DropdownInfo from '../UI/DropdownInfo/DropdownInfo';

function portfolioItem (props) {
    if (props.github != null) {
        return (
            < div className='portfolioItem' >
                <Thumbnail width={props.imageWidth} height={props.imageHeight} className='thumbnail' image={props.image} link={props.link} />
                <h3>Github: <a href={props.github}>{props.title}</a></h3>
                <DropdownInfo title={props.title} content={props.content} show={false} />
            </div>
        )
    } else {
        return (
            < div className='portfolioItem' >
                <Thumbnail width={props.imageWidth} height={props.imageHeight} className='thumbnail' image={props.image} link={props.link} />
                <DropdownInfo title={props.title} content={props.content} show={false} />
            </div>
        )
    }

}

export default portfolioItem;