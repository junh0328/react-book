import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Chapter1 from './chapter/Chapter1';
import Chapter2 from './chapter/Chapter2';
import Chapter3 from './chapter/Chapter3';
import Chapter4 from './chapter/Chapter4';
import Chapter5 from './chapter/Chapter5';
import Chapter6 from './chapter/Chapter6';
import Chapter7 from './chapter/Chapter7';
import Chapter8 from './chapter/Chapter8';
import Chapter9 from './chapter/Chapter9';
import Counter from './function/Counter';
import Counter_Reducer from './function/Counter_Reducer';
import Say from './function/Say';
import ValidationSample from './function/ValidationSample';
import ScrollBox from './function/ScrollBox';
import Input from './function/Input';
import Inputs from './function/Inputs';
import IterationSample from './function/IterationSample';
import HookHome from './Hooks/HookHome';
import Average from './function/Average';
import Average_useMemo from './function/Average_useMemo';
import Knowledge from './ITKnowledge/Knowledge';

function App() {
	return (
		<div className="navbar">
			<ul className="navbar__ul">
				<li className="navbar__li">
					<Link to="/">홈</Link>
				</li>
				<li className="navbar__li">
					<Link to="/IT">IT</Link>
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
				<li className="navbar__li">
					<Link to="/Chapter4">챕터 4</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter5">챕터 5</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter6">챕터 6</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter7">챕터 7</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter8">챕터 8</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Chapter9">챕터 9</Link>
				</li>
				<li className="navbar__li">
					<Link to="/HookHome">Hooks</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Counter">Counter</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Counter_Reducer">Counter_Re</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Say">Say</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Input">Input</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Inputs">Inputs</Link>
				</li>
				<li className="navbar__li">
					<Link to="/ValidationSample">Validate</Link>
				</li>
				<li className="navbar__li">
					<Link to="/ScrollBox">ScrollBox</Link>
				</li>
				<li className="navbar__li">
					<Link to="/IterationSample">Iteration</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Average">Average</Link>
				</li>
				<li className="navbar__li">
					<Link to="/Average_useMemo">useMemo</Link>
				</li>
			</ul>

			<Route path="/" exact={true} component={Home} />
			<Route path="/IT" component={Knowledge} />
			<Route path="/Chapter1" component={Chapter1} />
			<Route path="/Chapter2" component={Chapter2} />
			<Route path="/Chapter3" component={Chapter3} />
			<Route path="/Chapter4" component={Chapter4} />
			<Route path="/Chapter5" component={Chapter5} />
			<Route path="/Chapter6" component={Chapter6} />
			<Route path="/Chapter7" component={Chapter7} />
			<Route path="/Chapter8" component={Chapter8} />
			<Route path="/Chapter9" component={Chapter9} />
			<Route path="/HookHome" component={HookHome} />
			<Route path="/Counter" component={Counter} />
			<Route path="/Counter_Reducer" component={Counter_Reducer} />
			<Route path="/Say" component={Say} />
			<Route path="/ValidationSample" component={ValidationSample} />
			<Route path="/ScrollBox" component={ScrollBox} />
			<Route path="/Input" component={Input} />
			<Route path="/Inputs" component={Inputs} />
			<Route path="/IterationSample" component={IterationSample} />
			<Route path="/Average" component={Average} />
			<Route path="/Average_useMemo" component={Average_useMemo} />
		</div>
	);
}

export default App;
