import React from 'react';
import EVENT1 from './imgs/chapter4/EVENT1.png';
import EVENT2 from './imgs/chapter4/EVENT2.png';
import EVENT3 from './imgs/chapter4/EVENT3.png';
import EVENT4 from './imgs/chapter4/EVENT4.png';
import EVENT5 from './imgs/chapter4/EVENT5.png';
import EVENT6 from './imgs/chapter4/EVENT6.png';
import EVENT7 from './imgs/chapter4/EVENT7.png';
import EVENT8 from './imgs/chapter4/EVENT8.png';

function Chapter4() {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter4, Event Handling</h1>
			<p className="chapter__contents">
				사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트라고
				합니다. 예를 들어 버튼에 마우스 커서를 올렸을 때는 onmouseover 이벤트를
				실행하고, 클릭헸을 때는 onclick 이벤트를 실행합니다.
			</p>
			<h2 className="chapter__sub">4.1 리액트의 이벤트 시스템</h2>
			<p className="chapter__contents">
				리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 인터페이스가
				동일하기 대문에 사용법이 꽤 비슷합니다. 사용법은 일반 HTML에서 이벤트를
				작성하는 것과 비슷한데, 주의해야 할 몇 가지 사항이 있습니다.
				<ul>
					<b>이벤트를 사용할 때 주의 사항</b>
					<li>1. 이벤트 이름은 카멜 표기법으로 작성합니다. (낙타 등 표기법)</li>
					<li>
						2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라. 함수
						형태의 값을 전달합니다. HTML에서 이벤트를 설정할 때는 큰따옴표 안에
						실행할 코드를 넣었지만, 리액트에서는 함수형태의 객체를 전달합니다.
					</li>
					<li>
						3. DOM 요소에만 이벤트를 설정할 수 있습니다. 즉 div, button, input,
						form, ...등의 DOM 요소에는 이벤트를 설정할 수 있지만, 우리가 직접
						만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다.
						<b>
							{' '}
							예를 들어 다음과 같이 MyComponent에 onClick 값을 설정한다면
							MyComponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라,
							그냥 이름이 onclick인 props를 MyComponent에게 전달해 줄 뿐입니다.
						</b>
						따라서 컴포넌트에 자체적으로 이벤트를 설정할 수는 없습니다. 하지만
						전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수는 있습니다.
					</li>
				</ul>
				<img src={EVENT1} alt="event1" className="chapter__imgs"></img>
			</p>
			<h2 className="chapter__sub">4.2 onChange 이벤트 핸들링하기</h2>
			<p className="chapter__contents">
				<img src={EVENT2} alt="event2" className="chapter__imgs" />
				여기서 콘솔에 기록되는 e 객체는 SyntheticEvent 웹 브라우저의 네이티브
				이벤트를 감싸는 객체입니다. 네이티브 이벤트와 인터페이스가 같으므로 순수
				자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용하면 됩니다.
				SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가
				초기화되므로 정보를 참조할 수 없습니다. 예를 들어, 0.5초 뒤에 e 객체를
				참조하면 e 객체 내부의 모든 값이 비워지게 됩니다. 만약 비동기적으로
				이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야
				합니다.
				<br />
				console.log(e)의 값을 console.log(e.target.value)로 바꿔보세요. 이벤트가
				발생할 때마다 콘솔창에서 확인할 수 있게 됩니다.
			</p>
			<h3 className="chapter__sub">
				4.2.1 Input 여러 개 다루기 (클래스형 컴포넌트)
			</h3>
			<p className="chapter__contents">
				우리는 input 값을 state에 넣는 방법을 배웠습니다. 하지만 input이 여러
				개일 때는 어떻게 작업할까요? 메서드를 여러 개 만들어야 할까요? 쉽게
				처리하는 방법이 있습니다. 바로 event 객체를 활용하는 것입니다.
				e.target.name 값을 사용하면 됩니다. onChange 이벤트 핸들러에서
				e.target.name은 해당 인풋의 name을 가리킵니다. 지금은 message 겠죠? 이
				값을 사용하여 state를 설정하면 쉽게 해결할 수 있습니다.
				<img src={EVENT3} alt="event3" className="chapter__imgs" />
				<img src={EVENT4} alt="event4" className="chapter__imgs" />
				여기서는 handleChange 코드가 핵심입니다.{' '}
				<b>
					객체 안에서 key를 [ ] 로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제
					값이 key값으로 사용됩니다.
				</b>
			</p>
			<h2 className="chapter__sub">
				4.3 함수형 컴포넌트로 이벤트 여러 개 다루기
			</h2>
			<p className="chapter__contents">
				<img src={EVENT5} alt="event5" className="chapter__imgs" />
				<img src={EVENT6} alt="event6" className="chapter__imgs" />
				위 코드에서는 e.target.name 을 활용하지 않고 onChange 관련 함수 두 개를
				따로 만들어 주었습니다. 인풋이 두 개밖에 없다면 이런 코드도 나쁘지
				않습니다. 하지만 인풋의 개수가 많아질 것 같으면 e.target.name을 활용하는
				것이 더 좋을 수도 있습니다. <br />
				이번에는 useState를 통해 사용하는 상태에 문자열이 아닌 객체를
				넣어보겠습니다.
				<img src={EVENT7} alt="event7" className="chapter__imgs" />
				<img src={EVENT8} alt="event8" className="chapter__imgs" />
				<b>
					e.target.name 값을 활용하려면, 위와 같이 useState를 쓸 때 인풋 값들이
					들어 있는 form 객체를 사용해 주면 됩니다.
				</b>
			</p>
			<h2 className="chapter__sub">4.4 정리</h2>
			<p className="chapter__contents">
				함수형 컴포넌트에서 여러 개의 인풋 상태를 관리하기 위해 useState에서
				form 객체를 사용하는 방법도 배워 보았는데요, 우리가 8장에서 배울
				useReducer와 커스텀 Hooks를 사용하면 이 작업을 훨씬 더 편하게 할 수도
				있습니다.
			</p>
		</div>
	);
}

export default Chapter4;
