import React from 'react';
import './Chapter.css';
import COMPO1 from './imgs/COMPO1.png';
import COMPO2 from './imgs/COMPO2.png';
import COMPO3 from './imgs/COMPO3.png';
import COMPO4 from './imgs/COMPO4.png';
import COMPO5 from './imgs/COMPO5.png';
import COMPO6 from './imgs/COMPO6.png';

function Chapter3() {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter3</h1>
			<p className="chapter__contents">
				리액트를 사용하여 애플리케이션의 인터페이스를 설계할 때 사용자가 볼 수
				있는 요소는 여러가지 컴포넌트로 구성되어 있습니다. 컴포넌트의 기능은
				단순한 템플릿 이상입니다.
				<ul>
					<li className="under_line">
						데이터가 주어졌을 때 이에 맞추어 UI를 만들어 줍니다.
					</li>
					<li>
						라이프 사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질
						때, 변화가 일어날 때 주어진 작업들을 처리해줍니다.
					</li>
					<li>임의 메소드를 만들어 특별한 기능을 붙여줄 수 있습니다.</li>
				</ul>
			</p>
			<h2 className="chapter__sub">3.1 클래스형 컴포넌트</h2>
			<p className="chapter__contents">
				컴포넌트를 선언하는 방식은 두 가지입니다. 하나는 <b>함수형 컴포넌트</b>
				이고, 또 다른 하나는 <b>클래스형 컴포넌트</b>입니다. 클래스형 컴포넌트와
				함수형 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 state기능 및
				라이프사이클 기능을 사용할 수 있다는 것과 임의 메소드를 정의할 수 있다는
				것입니다. 클래스형 컴포넌트안에서는 render 함수가 꼭 있어야 하고, 그
				안에서 보여 주어야 할 JSX를 반환해야 합니다.
			</p>
			<p className="chapter__contents">
				<b>
					컴포넌트를 선언할 수 있는 두 가지 방법 중 어느 상황에 함수형
					컴포넌트를 사용해야 할까요?
				</b>
				<br />
				함수형 컴포넌트의 장점을 나열해 보면 다음과 같습니다.
				<ul>
					<li>클래스형 컴포넌트보다 선언하기가 훨씬 편합니다.</li>
					<li>메모리 자원도 클래스형 컴포넌트보다 덜 사용합니다.</li>
					<li>
						프로젝트를 완성하여 빌드한 후 배포할 때도 함수형 컴포넌트를 사용하는
						것이 결과물의 파일 크기가 더 작습니다.
					</li>
				</ul>
				하지만, 함수형 컴포넌트의 주요 단점은 state와 라이프사이클 API의 사용이
				불가능하다는 점입니다. 리액트 v16.8 업데이트 이후 Hooks라는 기능이
				도입되면서 해결되긴 하였습니다. 리액트 공식 매뉴얼에서는 컴포넌트를 새로
				작성할 때 함수형 컴포넌트와 Hooks를 사용하도록 권장하고 있습니다.
				하지만, 그렇다고 해서 클래스형 컴포넌트가 사라지는 것은 아니므로
				클래스형 컴포넌트의 기능은 꼭 알아 두어야 합니다.
			</p>
			<h2 className="chapter__sub">3.2 첫 컴포넌트 생성</h2>
			<p className="chapter__contents">
				<b> ES6 의 화살표 함수</b>
				<br />
				화살표 함수는 함수를 표현하는 새로운 방식입니다. 그렇다고 해서 기존
				function을 이용한 함수 선언 방식을 아예 대체하지는 않습니다. 이 문법은
				주로 함수를 파라미터로 전달할 때 유용합니다.
				<img src={COMPO1} alt="compo1" className="chapter__imgs" />
				function()을 사용했을 때는 검둥이가 나타나고, () =&gt; 를 사용했을 때는
				흰둥이가 나타납니다. 일반 함수는 자신이 종속된 객체를 this로 가리키며,
				화살표 함수는 자신이 종속된 인스턴스를 가리킵니다. 화살표 하수는 값을
				연산하여 바로 반환해야 할 때 사용하면 가독성을 높일 수 있습니다.
				<br />
				<b> Reactjs Code Snippets 를 사용하여 코드 생성하기</b>
				<br />
				VS Code에서는 확장 프로그램을 설치했다면 컴포넌트 코드를 간편하고 빠르게
				생성할 수 있습니다. 에디터에 rsc를 입력하고 Enter를 눌러 보새요.
			</p>
			<h2 className="chapter__sub">3.3 props</h2>
			<p className="chapter__contents">
				props는 properties의 줄임 표현으로 컴포넌트 속성을 설정할 때 사용하는
				요소입니다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서
				설정할 수 있습니다.
			</p>
			<h3 className="chapter__sub">3.3.1 JSX 내부에서 props 렌더링</h3>
			<p className="chapter__contents">
				props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있습니다.
				props를 렌더링할 때 2장에서 배웠던 것처럼 JSX 내부에서 중괄호 기호로
				감싸 주면 됩니다.
			</p>
			<h3 className="chpater__sub">
				3.3.2 컴포넌트를 사용할 때 props 값 지정하기
			</h3>
			<p className="chapter__contents">
				<img src={COMPO2} alt="compo2" className="chapter__imgs" />
				<ul>
					<li>부모 컴포넌트(App.js)에서 props.name 값을 설정하고</li>
					<li>
						자식 컴포넌트(MyComponent.js)에서 props.name 으로 호출하여 사용한다.
					</li>
				</ul>
			</p>
			<h3 className="chpater__sub">3.3.3 props 기본값 설정: defaultProps</h3>
			<p className="chpater__contents">
				컴포넌트의 props에 name값을 지정하지 않을 경우, '안녕하세요, 제 이름은
				입니다.' 라고 출력될 것 입니다. 지금처럼 props값을 따로 지정하지 않았을
				때 보여 줄 기본값을 설정하는 defaultProps에 대해 알아봅시다.
				<img src={COMPO3} alt="compo3" className="chapter__imgs"></img>
				자식 컴포넌트에서 설정하고, props.name의 값을 부모 컴포넌트에 받아올 수
				없을 때 defaultProps에 설정한 '기본이름'을 대신 넣어 랜더링합니다.
			</p>
			<h3 className="chpater__sub">
				3.3.4 비구조화 할당 문법을 통해 props 내부 값 추출하기
			</h3>
			<p className="chapter__contents">
				현재 MyComponent에서 props 값을 조회할 때마다 props.name,
				props.children과 같이 [props.] 이라는 키워드를 앞에 붙여 주고 있습니다.
				이러한 작업을 더 편하게 하기 위해 ES6의 비구조화 할당 문법을 사용하여
				내부 값을 바로 추출하는 방법을 알아보겠습니다.
				<img src={COMPO4} alt="compo4" className="chapter__imgs"></img>
				부모 컴포넌트에서 넘겨받을 props를 비구조화 할당을 통해 담은 파라미터를
				더 간단하게 사용할 수 있습니다.
				<img src={COMPO5} alt="compo5" className="chapter__imgs"></img>더 짧게
				함수형 컴포넌트에서 비구조화 할당을 사용할 수 있었습니다.
			</p>
			<h3 className="chpater__sub">
				3.3.5 클래스형 컴포넌트에서 props 사용하기
			</h3>
			<p className="chapter__contents">
				클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를
				조회하면 됩니다. 그리고 defaultProps와 propTypes는 똑같은 방식으로
				설정할 수 있습니다.
				<img src={COMPO6} alt="compo6" className="chapter__imgs"></img>
			</p>
		</div>
	);
}
export default Chapter3;
