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
import Chapter10 from './chapter/Chapter10';
import Chapter11 from './chapter/Chapter11';
import Chapter12 from './chapter/Chapter12';
import Chapter13 from './chapter/Chapter13';
import Counter from './function/Counter';
import Counter_Reducer from './function/Counter_Reducer';
import Say from './function/Say';
import ValidationSample from './function/ValidationSample';
import Input from './function/Input';
import Inputs from './function/Inputs';
import IterationSample from './function/IterationSample';
import HookHome from './Hooks/HookHome';
import Average from './function/Average';
import Average_useMemo from './function/Average_useMemo';
import Knowledge from './ITKnowledge/Knowledge';
import { ImPencil2 } from 'react-icons/im';
import Immer from './function/Immer';

function App() {
	return (
		<div className="container">
			<div className="navbar">
				<ul className="navbar__ul">
					<li className="navbar__li">
						<Link to="/react-book/">
							<ImPencil2 />홈
						</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/IT">IT 지식</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter1">리액트, 챕터 1</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter2">리액트, 챕터 2</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter3">리액트, 챕터 3</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter4">리액트, 챕터 4</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter5">리액트, 챕터 5</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter6">리액트, 챕터 6</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter7">리액트, 챕터 7</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter8">리액트, 챕터 8</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter9">리액트, 챕터 9</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter10">리액트, 챕터 10</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter11">리액트, 챕터 11</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter12">리액트, 챕터 12</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Chapter13">리액트, 챕터 13</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/HookHome">Hooks</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Counter">Counter</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Counter_Reducer">Counter_Re</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Say">Say</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Input">Input</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Inputs">Inputs</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/ValidationSample">Validate</Link>
					</li>

					<li className="navbar__li">
						<Link to="/react-book/IterationSample">Iteration</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Average">Average</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Average_useMemo">useMemo</Link>
					</li>
					<li className="navbar__li">
						<Link to="/react-book/Immer">Immer</Link>
					</li>
				</ul>
			</div>

			<Route path="/react-book/" exact={true} component={Home} />
			<Route path="/react-book/IT" component={Knowledge} />
			<Route path="/react-book/Chapter1" component={Chapter1} />
			<Route path="/react-book/Chapter2" component={Chapter2} />
			<Route path="/react-book/Chapter3" component={Chapter3} />
			<Route path="/react-book/Chapter4" component={Chapter4} />
			<Route path="/react-book/Chapter5" component={Chapter5} />
			<Route path="/react-book/Chapter6" component={Chapter6} />
			<Route path="/react-book/Chapter7" component={Chapter7} />
			<Route path="/react-book/Chapter8" component={Chapter8} />
			<Route path="/react-book/Chapter9" component={Chapter9} />
			<Route path="/react-book/Chapter10" component={Chapter10} />
			<Route path="/react-book/Chapter11" component={Chapter11} />
			<Route path="/react-book/Chapter12" component={Chapter12} />
			<Route path="/react-book/Chapter13" component={Chapter13} />
			<Route path="/react-book/HookHome" component={HookHome} />
			<Route path="/react-book/Counter" component={Counter} />
			<Route path="/react-book/Counter_Reducer" component={Counter_Reducer} />
			<Route path="/react-book/Say" component={Say} />
			<Route path="/react-book/ValidationSample" component={ValidationSample} />
			<Route path="/react-book/Input" component={Input} />
			<Route path="/react-book/Inputs" component={Inputs} />
			<Route path="/react-book/IterationSample" component={IterationSample} />
			<Route path="/react-book/Average" component={Average} />
			<Route path="/react-book/Average_useMemo" component={Average_useMemo} />
			<Route path="/react-book/Immer" component={Immer} />
		</div>
	);
}

export default App;
