import React from 'react';
import ref1 from './imgs/chapter5/ref1.png';
import ref2 from './imgs/chapter5/ref2.png';
import ref3 from './imgs/chapter5/ref3.png';
import ref4 from './imgs/chapter5/ref4.png';
import ref5 from './imgs/chapter5/ref5.png';

function Chapter5() {
	return (
		<div className="wrap">
			<h1 className="chpater__main">ref:DOM에 이름 달기</h1>
			<p className="chapter__contents">
				일반 HTML에서 DOM 요소에 이름을 달 때는 id 선택자를 사용합니다. <br />
				특정 DOM 요소에 어떤 작업을 해야 할 때 이렇게 요소에 id를 달면 CSS에서
				특정 id에 특정 스타일을 적용하거나 자바스크립트에서 해당 id를 가진
				요소를 찾아서 작업할 수 있겠죠. 이렇게 HTML에서 id를 사용하여 DOM에
				이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법이
				있습니다. 바로 <b>ref (refrences)</b> 개념입니다.
				<p className="chapter__contents">
					<b>리액트 컴포넌트 안에서는 id를 사용하면 안 되나요?</b>
				</p>
				리액트 컴포넌트 안에서도 id를 사용할 수는 있습니다. JSX 안에 DOM에 id를
				달면 해당 DOM을 렌더링할 떄 그대로 전달합니다. 하지만 특수한 경우가
				아니면 사용을 권장하지 않습니다.{' '}
				<b>
					예를 들어 컴포넌트를 여러 번 사용한다고 가정해 보세요. HTML에서 DOM의
					id는 unique해야 하는데, 이런 상황에서는 중복 id를 가진 DOM이 여러 개
					생기니 잘못된 사용입니다. ref는 전역적으로 작동하지 않고 컴포넌트
					내부에서만 작동하기 때문에 이런 문제가 생기지 않습니다.
				</b>
				대부분 id를 사용하지 않고도 원하는 기능을 구현할 수 있지만, 다른
				라이브러리나 프레임워크와 함께 id를 사용해야 하는 상황이 발생할 수
				있습니다. 이런 상황에서는 컴포넌트를 만들 때마다 id 뒷부분에 추가
				텍스트를 붙여서(예: button01, button02, ....) 중복 id가 발생하는 것을
				방지해야 합니다.
			</p>
			<h2 className="chapter__sub">ref는 어떤 상황에서 사용해야 할까?</h2>
			<p className="chapter__contents">
				먼저 ref는 어떤 상황에 사용해야 하는지 제대로 짚고 넘어가 봅시다. 일단
				특정 DOM에 작업을 해야 할 때 ref를 사용한다는 것은 이미 파악했습니다.
				하지만 대체 어떤 작업을 할 때 ref를 사용해야 할까요?{' '}
				<b> 'DOM을 꼭 직접적으로 건드려야 할 때' 입니다.</b>
				하지만 리액트에서 이런 작업은 굳이 DOM에 접근하지 않아도 state로 구현할
				수 있습니다.
				<img src={ref1} alt="ref1" className="chapter__imgs" />
				<img src={ref2} alt="ref2" className="chapter__imgs" />
				input 에서는 onChange 이벤트가 발생하면 handleChange를 호출하여 state의
				password 값을 업데이트하게 했습니다. button에서는 onClick 이벤트가
				발생하면 handleButtonClick을 호출하여 Clicked 값을 참으로 설정했고,
				validate 값을 검증 결과로 설정했습니다. <br />
				input의 className 값은 버튼을 누르기 전에는 비어 있는 문자열을 전달하며,
				버튼을 누른 후 검증 경과에 따라 success 또는 failure 값을 설정합니다.
			</p>
			<h2 className="chapter__sub">5.2 ref 사용</h2>
			<p className="chapter__contents">
				ref를 사용하는 방법은 두 가지입니다. 첫 번째는{' '}
				<b>콜백 함수를 통한 ref 설정</b>이고, 두 번째는{' '}
				<b>createRef를 통한 ref 설정</b>입니다.
			</p>
			<h3 className="chapter__sub">5.2.1 콜백 함수를 통한 ref 설정</h3>
			<p className="chapter__contents">
				ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것입니다. ref를
				달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됩니다. 이
				콜백 함수는 ref 값을 파라미터로 전달받습니다. 그리고 함수 내부에서
				파라미터로 받으 ref를 컴포넌트의 멤버 변수로 설정해 줍니다.
				<img src={ref3} alt="ref3" className="chapter__imgs" />
				이렇게 하면 앞으로 this.input은 input 요소의 DOM을 가리킵니다. ref
				이름은 원하는 것으로 자유롭게 지정할 수 있습니다. DOM 타입과 관계없이
				this.superman = ref처럼 마음대로 지정합니다.
			</p>
			<h3 className="chapter__sub">5.2.2 createRef를 통한 ref 설정</h3>
			<p className="chapter__contents">
				ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를
				사용하는 것입니다.
				<img src={ref4} alt="ref4" className="chapter__imgs" />
				createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로
				React.createRef()를 담아 주어야 합니다. 그리고 해당 멤버 변수를 ref를
				달고자 하는 요소에 ref props로 넣어주면 설정이 완료됩니다. 설정한 뒤
				나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면
				됩니다. 콜백함수를 사용할 때와 다른 점은 이렇게 뒷부분에 .current를 넣어
				주어야 한다는 것입니다.
			</p>
			<h2 className="chapter__sub">5.3 컴포넌트에 ref 달기</h2>
			<p className="chapter__contents">
				리액트에서는 컴포넌트에도 ref를 달 수 있습니다. 이 방법은 주로 컴포넌트
				내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씁니다. 컴포넌트에 ref를
				다는 방법은 DOM에 ref를 다는 방법과 같습니다.
				<img src={ref5} alt="ref5" className="chapter__imgs"></img>
				이렇게 하면 컴포넌트 내부의 메서드 및 멤버 변수에도 접근할 수 있습니다.
				즉, 내부의 ref에도 접근할 수 있습니다. (예: myComponent.handleClick,
				myComponent.input 등..)
			</p>
			<h2 className="chapter__sub">5.4 정리</h2>
			<p className="chapter__contents">
				컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용합니다. 먼저
				ref를 사용하지 않고도 원하는 기능을 구현할 수 이쓴지 반드시 고려한 후에
				활용하세요. <br />이 시점에서 오해할 수 있는 부분이 있는데, 서로 다른
				컴포넌트끼리 데이터를 교류할 때 ref를 사용한다면 이는 잘못된
				사용법입니다. 컴포넌트끼리 데이터를 교류할 때는 언제나 데이터를 부모와
				자식 흐름으로 교류해야 합니다. 함수형 컴포넌트에서는 useRef라는 훅
				함수를 사용합니다. 사용법은 이 장에서 배운 React.createRef와 유사합니다.
			</p>
		</div>
	);
}

export default Chapter5;
