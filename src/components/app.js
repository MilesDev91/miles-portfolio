import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../routes/home/home';
import Portfolio from '../routes/portfolio/portfolio';
import Contact from '../routes/contact/contact';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {

	/** Gets fired when the route changes.
 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
 *	@param {string} event.url	The newly routed URL
 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	constructor(props) {
		super(props);
		if (typeof window !== 'undefined') { document.title = 'Miles Applications'; }
	}

	render () {
		return (
			<div id="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio/" element={<Portfolio />} />
					<Route path="/contact/" element={<Contact />} />
				</Routes>
			</div>
		);
	}
}
