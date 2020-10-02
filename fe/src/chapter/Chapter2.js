import React from 'react';
import './Chapter.css';
import JSX2 from './imgs/JSX2.png';
import JSX3 from './imgs/JSX3.png';
import JSX4 from './imgs/JSX4.png';

function Chapter2() {
	return (
		<div className="wrap">
			<h1 className="chapter__main">chapter 2</h1>
			<h2 className="chapter__sub">2.1 코드 이해하기</h2>
			<p className="chapter__contents">import React from 'react';</p>
			<p className="chapter__contents">
				이 코드는 리액트를 불러와서 사용할 수 있게 해 줍니다. 리액트 프로젝트를
				만들 때 node_modules라는 디렉터리도 함께 생성되는데요, 프로젝트 생성
				과정에서 node_modules 디렉터리에 react 모듈이 설치됩니다. 그리고 이렇게
				import 구문을 통해 리액트를 불러와서 사용할 수 있는 것이죠. 여기서 한
				가지 알아 둘 점이 있습니다. 아렇게 모듈을 불러와서 사용하는 것은 사실
				원래 브라우저에는 없던 기능입니다. 브러우저가 아닌 환경에서
				자바스크립트를 실행할 수 있게 해주는 환경인 Node.js에서 지원하는
				기능입니다.
			</p>
			<p className="chapter__contents">
				이러한 기능을 브라우저에서도 사용하기 위해 <b>번들러(bundler)</b>를
				사용합니다. 대표적인 번들러로 웹팩, Parcel, browserify라는 도구들이
				있으며, 각 도구마다 특성이 다릅니다. 리액트 프로젝트에서는 주로 웹팩을
				사용하는 추세입니다. 편의성과 확장성이 다른 도구들보다 뛰어나기
				때문입니다. 번들러 도구를 사용하면 import (또는 require)로 모듈을
				불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 줍니다. 또
				최적화 과정에서 여러 개의 파일을 분리될 수도 있습니다. 이책의
				프로젝트에서는 <b>src/index.js</b>를 시작으로 필요한 파일을 다 불러와서
				번들링하게 됩니다.
			</p>
			<p className="chpater__contents">
				리액트를 불러오는 코드 하단에는 다음과 같이 SVG 파일과 CSS 파일을 import
				하는 코드가 있습니다.
				<ul>
					<li>import logo from './logo.svg';</li>
					<li>import './App.css';</li>
				</ul>
				웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있습니다.
				이렇게 파일들을 불러오는 것은 웹팩의 <b>로더</b> 라는 기능이 담당합니다.
				로더는 여러 가지 종류가 있습니다. babel-loader는 자바스크립트 파일들을
				불러오면서 최신 자바스크립트 문법으로 작성된 코드를 바벨이라는 도구를
				사용하여 ES5 문법으로 변환해 줍니다.
			</p>
			<p className="chpater__contents">
				<b> 최신 자바스크립트로 작성된 코드를 왜 변환하나요?</b>
				<br />
				ES5는 이전 버전의 자바스크립트를 의미합니다. 최신 자바스크립트 문법을
				ES5 형태로 변환하는 것은 구버전 웹 브라우저와 호환하기 위해서입니다.
				현재 대부분의 최신 웹 브라우저에서는 자체적으로 최신 자바스크립트 문법을
				바로 실행할 수 있지만, 구버전 웹 브라우저에서는 실행되지 않기 때문에
				사전에 꼭 변환해 주어야 합니다. 또한, 우리가 앞으로 배우게 될 리액트
				컴포넌트에서 사용하는 JSON 문법도 정식 자바스크립트 문법이 아니므로 ES5
				형태의 코드로 변환해야 합니다.
				<span className="under_line">
					ES5 이후의 문법들은 ECMAScirpt등과 같은 형태로 이름이 지어집니다.
				</span>
			</p>
			<h2 className="chapter__sub">2.2 JSX란?</h2>
			<p className="chapter__contents">
				JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼습니다. 이런
				형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는
				과정에서 바벨을 이용하여 일반 자바스크립트 형태의 코드로 변환됩니다.
			</p>
			<h2 className="chapter__sub">2.3 JSX의 장점</h2>
			<h3 className="chapter__sub">2.3.1 보기 쉽고 익숙하다</h3>
			<h3 className="chpater__sub">2.3.2 더욱 높은 활용도</h3>
			<p className="chapter__contents">
				JSX에서는 우리가 알고 있는 div나 span과 같은 HTML 태그를 사용할 수 있을
				뿐만 아니라, 앞으로 만들 컴포넌트도 JSX 안에서 작성할 수 있습니다.
			</p>
			<p className="chapter__contents">
				<p>
					<b> ReactDOM.render는 무엇인가요?</b>
				</p>
				이 코드는 컴포넌트를 페이지에 렌더링하는 역할을 하며, react-dom 모듈을
				불러와 사용할 수 있습니다. 이 함수의 첫 번째 파라미터에는 페이지에
				렌더링할 내용을 JSX로 작성하고, 두 번째 파라미터에는 해당 JSX를 렌더링할
				document 내부 요소를 설정합니다. 여기서는 id가 root인 요소 안에 렌더링을
				하도록 설정했는데요, 이 요소는 public/index.html 파일을 열어 보면
				있답니다.
			</p>
			<p className="chapter__contents">
				<b> React.StrictMode는 무엇인가요?</b>
				<p>
					React.StrictMode는 리액트 프로젝트에서 리액트의 레거시 기능을 사용하지
					못하게 하는 기능입니다. 이를 사용하면 문자열 ref, componentWillMount
					등 나중에는 완전히 사라지게 될 옛날 기능을 사용했을 때 경고를
					출력합니다. 이 책을 작성할 시점에는 해당 옵션이 기본적으로 적용되어
					있지 않았습니다.
				</p>
			</p>
			<p className="chapter__contents">
				<b>
					리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야
					할까요?
				</b>
				<p>
					React 에서 사용하는 Virtual DOM에서 컴포넌트 변화를 감지해낼 때
					효율적으로 비교할 수 있도록 규칙을 세웠기 때문입니다. (컴포넌트 내부는
					반드시 하나의 DOM 트리 구조로 이루어져야 한다.) 여기서 꼭 div 요소를
					사용하고 싶지 않을 수도 있습니다. 그런 경우에는 리액트 <b>v16</b>부터
					도입된 Fragment라는 기능을 사용하면 됩니다.
				</p>
			</p>
			<h3 className="chapter__sub">2.4.3 if문 대신 조건부 연산자</h3>
			<p className="chapter__contents">
				JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수는 없습니다. 하지만
				조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if문을 사용하여
				사전에 값을 설정하거나, 중괄호 안에 조건부 연산자를 사용하면 됩니다.
				조건부 여산자의 또 다른 이름은 삼항 연산자입니다.
				<img src={JSX2} alt="JSX2" className="chapter__imgs" />
			</p>
			<h3 className="chpater__sub">
				2.4.4 AND 연산자 (&&)를 사용한 조건부 렌더링
			</h3>
			<p className="chapter__contents">
				개발하다 보면 특정 조건을 만족할 때 내용을 보여 주고, 만족하지 않을 때
				아예 아무것도 렌더링하지 않아야 하는 상황이 올 수 있습니다. 이럴 때도
				조건부 연산자를 통해 구현할 수는 있습니다.
				<img src={JSX3} alt="JSX3" className="chapter__imgs" />위 코드와 같이
				null을 렌더링 하면 아무것도 보여 주지 않습니다. 하지만 이것보다 더 짧은
				코드로 똑같은 작업을 할 수 있습니다. 다음과 같이 AND 연산자를 사용해서
				조건부 렌더링을 할 수 있습니다.
				<img src={JSX4} alt="JSX4" className="chapter__imgs" />
			</p>
		</div>
	);
}

export default Chapter2;
