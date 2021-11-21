import { Component } from 'react';
import './DropdownInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DropdownInfo extends Component {
    state = {
        show: this.props.show
    }

    showHandler = () => {
        this.setState({ show: !this.state.show });
    }

    render () {

        let dropdownContent;

        let buttonIcon = <FontAwesomeIcon icon="angle-right" />;

        if (this.state.show) {
            dropdownContent = <p>{this.props.content}</p>;
            buttonIcon = <FontAwesomeIcon icon="angle-down" />;
        }
        return (
            <div className='dropdownInfo' >
                <h2 onClick={this.showHandler}>{this.props.title} {buttonIcon}</h2>
                {dropdownContent}
            </div>
        );
    }


}

export default DropdownInfo;