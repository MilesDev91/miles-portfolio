import { Component } from 'react';

const withResizeHandler = (WrappedComponent) => {
    return class extends Component {

        resize () {
            this.forceUpdate();
        }

        componentDidMount () {
            window.addEventListener('resize', this.resize.bind(this));
        }

        componentWillUnmount () {
            window.removeEventListener('resize', this.resize.bind(this));
        }

        render () {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
}

export default withResizeHandler;