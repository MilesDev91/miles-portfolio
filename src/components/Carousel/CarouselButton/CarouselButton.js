import { Component } from 'react';
import './CarouselButton.css';

class CarouselButton extends Component {

    state = {
        buttonClass: 'button'
    }


    btnAnimTrigger = false;

    buttonAnimationHandler = (direction) => {
        if (!this.btnAnimTrigger) {
            this.btnAnimTrigger = true;
            let btnClass = ['button'];
            if (direction === "left") {
                btnClass.push('buttonAnimationLeft');
                this.setState({ buttonClass: btnClass.join(' ') });
                this.timeoutHandler(() => this.setState({ buttonClass: 'button' }));
            } else {
                btnClass.push('buttonAnimationRight');
                this.setState({ buttonClass: btnClass.join(' ') });
                this.timeoutHandler(() => this.setState({ buttonClass: 'button' }));
            }
            this.props.positionChange(this.props.direction);
        }
    }

    timeoutHandler = (change) => {
        setTimeout(() => {
            change();
            this.btnAnimTrigger = false;
        }, this.props.animationTiming);
    }

    render () {
        return (
            <button className={this.state.buttonClass} onClick={() => this.buttonAnimationHandler(this.props.direction)}>
                {this.props.children}
            </button>
        );
    }
}

export default CarouselButton;