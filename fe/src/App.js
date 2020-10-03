import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Chapter1 from './chapter/Chapter1';
import Chapter2 from './chapter/Chapter2';
import Chapter3 from './chapter/Chapter3';

function App() {
	return (
		<div className="navbar">
			<ul className="navbar__ul">
				<li className="navbar__li">
					<Link to="/">홈</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter1">챕터 1</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter2">챕터 2</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter3">챕터 3</Link>
				</li>
			</ul>

			<Route path="/" exact={true} component={Home} />
			<Route path="/Chapter1" component={Chapter1} />
			<Route path="/Chapter2" component={Chapter2} />
			<Route path="/Chapter3" component={Chapter3} />
		</div>
	);
}

export default App;
