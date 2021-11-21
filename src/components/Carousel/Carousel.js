/**
 * Carousel Component
 * @description Sliding carousel
 *      Props:  images{array of urls for src property}
 *              this.animationTiming{number of ms for button and image animations}
 * @author [Miles Coffin](https://github.com/MilesDev91)
 * 
 * 
 */

import { Component } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselButton from './CarouselButton/CarouselButton';

class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1
        }

        this.imageClass = ['carousel'];
        this.pClass = null;
        this.animationTiming = this.props.animationTiming;
    }



    componentDidUpdate () {
        this.imageClass = ['carousel'];
        this.pClass = null;
    }

    /**
     * @description Fed into carousel buttons. Determines from which image the animation starts and to which it ends.
     * @param {string} direction Either "left" or "right". "right" can be anything because it is the else condition.
     */
    positionChangedHandler = (direction) => {
        let oldPosition = this.state.position;
        let maxPosition = this.props.images.length;
        if (direction === "left") {
            if (oldPosition === 1) {
                this.setState({ position: maxPosition });
                this.imageAnimationHandler(oldPosition, maxPosition);
            } else {
                this.setState({ position: oldPosition - 1 });
                this.imageAnimationHandler(oldPosition, oldPosition - 1);
            }

        } else {
            if (oldPosition === maxPosition) {
                this.setState({ position: 1 });
                this.imageAnimationHandler(oldPosition, 1);
            } else {
                this.setState({ position: this.state.position + 1 });
                this.imageAnimationHandler(oldPosition, oldPosition + 1);
            }
        }
    }

    /**
     * @description Simply takes the old position and new position from
     * positionChangedHandler and pushes a reference to the proper animation
     * class onto the imageClass state property.
     * @param {number} oldP The current(old) state position.
     * @param {number} newP The new position.
     */
    imageAnimationHandler = (oldP, newP) => {
        var newClass = "carousel" + oldP + "to" + newP + ""
        this.imageClass.push(newClass);
    }

    render () {


        let cText;

        switch (this.state.position) {
            case 1:
                this.pClass = 'carouselp1';
                cText = <p className={this.pClass}>Every site has its unique challenges, and each can be overcome.</p>;
                break;
            case 2:
                this.pClass = 'carouselp2';
                cText = <p className={this.pClass}>React.js is a powerful library that transforms any website into a smooth experience.</p>;
                break;
            case 3:
                this.pClass = 'carouselp3';
                cText = <p className={this.pClass}>Github and project management tools keep everyone on the right track. Communication is the key to success from start to finish.</p>;
                break
            default:
                break
        }

        const images = this.props.images.map((image, index) => {
            return <img src={image} key={index} alt="CarouselImage" />;
        });

        return (
            <div className='carousel'>
                <div className={this.imageClass.join(' ')}>
                    {images}
                </div >
                <div className='overlay'>

                </div>
                <div className='middle'>
                    <CarouselButton animationTiming={this.animationTiming} positionChange={this.positionChangedHandler} direction="left">
                        <FontAwesomeIcon icon="angle-left" size="3x" />
                    </CarouselButton>
                    {cText}
                    <CarouselButton animationTiming={this.animationTiming} positionChange={this.positionChangedHandler} direction="right" >
                        <FontAwesomeIcon icon="angle-right" size="3x" />
                    </CarouselButton>
                </div >
            </div >
        );
    }
}

export default Carousel;