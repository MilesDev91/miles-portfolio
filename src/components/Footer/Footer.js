import { Link } from 'react-router-dom';
import './Footer.css';
import withResizeHandler from '../../hoc/withResizeHandler';

const footer = (props) => {

    let footerContent = (
        <div className='footer'>
            <h1 >Thank you for visiting</h1>
            <p> &copy; 2017 Miles Applications</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );

    if (typeof window !== 'undefined') {
        if (window.matchMedia('(max-width: 599px)').matches) {
            footerContent = (
                <div className='footer'>
                    <p> &copy; 2021 Miles Applications</p>
                </div>
            );
        }
    }


    return (
        <div>
            {footerContent}
        </div>
    );
};

export default withResizeHandler(footer);