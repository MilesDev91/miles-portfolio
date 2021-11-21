/*Needed a solution to clear timeouts  
/ Solution provided by jmgem on stackoverflow
/ Thanks!!!
*/

import { Component } from 'react';

const Timeout = Composition => class _Timeout extends Component {

    componentWillMount () {
        this.timeouts = [];
    }

    setTimeout () {
        this.timeouts.push(setTimeout.apply(null, arguments));
    }

    clearTimeouts () {
        this.timeouts.forEach(clearTimeout);
    }

    componentWillUnmount () {
        this.clearTimeouts();
    }

    render () {
        const { timeouts, setTimeout, clearTimeouts } = this;

        return <Composition
            timeouts={timeouts}
            setTimeout={setTimeout}
            clearTimeouts={clearTimeouts}
            {...this.props} />
    }
}

export default Timeout;