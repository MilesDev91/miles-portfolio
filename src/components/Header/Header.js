import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu';
import withResizeHandler from '../../hoc/withResizeHandler';

const options = [
	<Link to="/">Home</Link>,
	<Link to="/portfolio">Portfolio</Link>,
	<Link to="/contact">Contact</Link>
]

class Header extends Component {

	state = {
		dropdownEnabled: false
	}

	dropdownEnabledToggler = () => {
		this.setState({ dropdownEnabled: !this.state.dropdownEnabled });
	}

	render () {
		let headerStyle = (
			<nav>
				<DropdownMenu show={this.state.dropdownEnabled} options={options} />
				<button onClick={this.dropdownEnabledToggler}><FontAwesomeIcon icon="angle-down" size="2x" /></button>
			</nav>
		);

		if (typeof window !== "undefined") {
			if (window.matchMedia("(min-width:600px)").matches) {
				headerStyle = (
					<nav>
						<Link to="/">Home</Link>
						<Link to="/portfolio">Portfolio</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				);
			}
		}

		return (
			<div>
				<header className='header'>
					<h1>Miles Applications</h1>
					{headerStyle}
				</header>
			</div>
		);
	}
}

export default withResizeHandler(Header);