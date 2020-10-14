import React from 'react';
import ls1 from './imgs/chapter7/ls1.png';
import ls2 from './imgs/chapter7/ls2.png';
import ls3 from './imgs/chapter7/ls3.png';

function Chapter7() {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter7, 라이프 사이클 메소드 이해하기</h1>
			<p className="chapter__contents">
				모든 리액트 컴포넌트에는 라이프사이클(수명주기)이 존재합니다.{' '}
				<b>
					컴포넌트의 수명은 페이지에 렌더링되기 전인 준비 과정에서 시작하여
					페이지에서 사라질 때 끝납니다.
				</b>{' '}
				리액트 프로젝트를 진행하다 보면 가끔 컴포넌트를 처음으로 렌더링할 때
				어떤 작업을 처리해야 하거나 컴포넌트를 업데이트하기 전후로 어떤 작업을
				처리해야 할 수도 있고, 또 불필요한 업데이트를 방지해야 할 수도 있습니다.{' '}
				<br />
				이때는 라이프 사이클 메소드를 사용합니다. 참고로{' '}
				<b>
					라이프사이클 메소드는 클래스형 컴포넌트에서만 사용할 수 있습니다.
				</b>{' '}
				함수형 컴포넌트에서는 사용할 수 없는데요, 그 대신에 Hooks 라는 기능을
				사용하여 비슷한 작업을 처리할 수 있습니다.
			</p>
			<h2 className="chapter__sub">라이프사이클 메서드의 이해</h2>
			<p className="chapter__contents">
				라이프사이클 메서드의 종류는 총 아홉 가지입니다. <b>Will</b> 접두사가
				붙은 메서드는 어떤 <b>작업을 작동하기 전에 실행</b>되는 메서드이고,{' '}
				<b>Did</b> 접두사가 붙은 메서드는 어떤 <b>작업을 작동한 후에 실행</b>
				되는 메서드입니다. 이 메서드들은 우리가 컴포넌트 클래스에서 덮어 써
				선언함으로써 사용할 수 있습니다. 라이프 사이클은 총 세 가지,{' '}
				<b>마운트, 언마운트, 업데이트</b> 카테고리로 나눕니다.
				<img src={ls1} alt="ls1" className="chapter__imgs" />
			</p>
			<h2 className="chapter__sub">마운트</h2>
			<p className="chapter__contents">
				DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 합니다. 마운트
				시에는 호출하는 메서드가 차례대로 나옵니다.
			</p>
			<ul className="chapter__ul">
				<li className="big">
					- constructor: 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자
					메서드
				</li>
				<li className="big">
					- getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는
					메서드
				</li>
				<li className="big">- render: 우리가 준비한 UI를 렌더링하는 메서드</li>
				<li className="big">
					- componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는
					메서드
				</li>
			</ul>
			<h2 className="chapter__sub">업데이트</h2>
			컴포넌트는 다음과 같은 총 네가지 경우에 업데이트합니다.
			<ul className="chapter__ul">
				<li className="big">1. props가 바뀔 때</li>
				<li className="big">2. state가 바뀔 때</li>
				<li className="big">3. 부모 컴포넌트가 리렌더링될 때</li>
				<li className="big">4. this.forceUpdate로 강제 렌더링을 트리거할 때</li>
			</ul>
			이렇게 컴포넌트를 업데이트할 때는 다음 메서드를 호출합니다.
			<ul className="chapter__ul">
				<li className="big">
					- getDerivedStateFromProps: 마운트에서도 호출되는 메서드. props의
					변화에 따라 state에도 변화를 주고 싶을 때 사용한다.
				</li>
				<li className="big">
					- shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지
					결정한다. true, false 값을 반환해야 하며, false를 반환하면 작업을
					중지하고, 컴포넌트가 리렌더링 되지 않는다.
				</li>
				<li className="big">
					- render: 컴포넌트를 리렌더링한다. this.forceUpdate 함수를 호출하면
					앞의 과정을 생략하고 바로 render 함수를 호출한다
				</li>
				<li className="big">
					- getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 직전에
					호출한다.
				</li>
				<li className="big">
					- componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출한다.
				</li>
			</ul>
			<h2 className="chapter__sub">언마운트</h2>
			<p className="chapter__contents">
				마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고
				합니다.
			</p>
			<img src={ls2} alt="ls2" className="chapter__imgs_w100" />
			<p className="chapter__contents">
				라이프 사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행하는
				메서드입니다. 이 메서드들은 서드파티 라이브러리를 사용하거나, DOM을 직접
				건드려야할 때 유용하게 사용됩니다. 추가로 컴포넌트 업데이트의 성능을
				개선할 때는 shouldComponentUpdate가 중요하게 사용됩니다.
				<br /> shouldComponentUpdate를 사용하여 컴포넌트의 업데이트 성능을
				개선하는 내용은 11장에서 다루겠습니다.
			</p>
			<h2 className="chpater__sub">라이프사이클 메서드 살펴보기</h2>
			<h3 className="chapter__sub">7.2.1. render() 함수</h3>
			<p className="chpater__contents">
				이 메서드는 모양새를 정의합니다. 그렇기에 컴포넌트에서 가장 중요한
				메서드라고 할 수 있습니다. 라이프사이클 메서드 중 유일한 필수
				메서드이기도 합니다. 이 메서드 안에서 this.props와 this.state에 접근할
				수 있으며, 리액트 요소를 반환합니다. 요소는 div 같은 태그가 될 수도
				있고, 따로 선언한 컴포넌트가 될 수도 있습니다. 아무것도 보여 주고 싶지
				않다면 null 값이나 false 값을 반환하도록 하세요. 그리고 다음 사항에
				주의하세요.{' '}
				<b>
					이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안
					되며, 브라우저의 DOM에 접근해서도 안 됩니다.
				</b>{' '}
				<b>
					DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서
					처리해야 합니다.
				</b>
			</p>
			<h3 className="chapter__sub">7.2.2. constructor 메서드</h3>
			<p className="chpater__contents">
				이 메서드는 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로
				실행됩니다. 이 메서드에서는 초기 state를 설정할 수 있습니다.
			</p>
			<h3 className="chapter__sub">7.2.3. getDerivedStateFromProps 메서드</h3>
			<p className="chpater__contents">
				이것은 리액트 v16.3 이후에 새로 만든 라이프사이클 메서드입니다. props로
				받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될
				때와 업데이트 될 때 호출됩니다.
			</p>
			<h3 className="chapter__sub">7.2.4. componentDidMount 메서드</h3>
			<p className="chpater__contents">
				이것은 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행합니다. 이 안에서
				다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트
				등록, setTimeout, setInterval, 네트워크 요청과 같은 비동기 작업을
				처리합니다.
			</p>{' '}
			<h3 className="chapter__sub">7.2.5. shouldComponentUpdate 메서드</h3>
			<p className="chpater__contents">
				이것은 props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를
				지정하는 메서드입니다. 이 메서드에서는 반드시 true 값 또는 false값을
				반환해야 합니다. 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면
				기본적으로 언제나 true 값을 반환합니다. 이 메서드가 false 값을
				반환한다면 업데이트 과정은 여기서 중지합니다. 이 메서드 안에서 현재
				props와 state는 this.props 와 this.state로 접근하고, 새로 설정될 props
				또는 state는 nextProps의 nextState로 접근할 수 있습니다. 프로젝트 성능을
				최적화할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는
				false값을 반환하게 합니다. 컴포넌트를 최적화하는 부분은 앞으로 리액트를
				공부하면서 더 자세히 알아보겠습니다.
			</p>{' '}
			<h3 className="chapter__sub">7.2.6. getSnapshotBeforeUpdate 메서드</h3>
			<p className="chpater__contents">
				이것은 리액트 v16.3 이후 만든 메서드입니다. 이 메서드는 render에서
				만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됩니다. 이
				메서드에서 반환하는 값은 componentDidMount에서 세 번째 파라미터인
				snapshot 값으로 전달받을 수 있는데요, 주로 업데이트하기 직전의 값을
				참고할 일이 있을 때 활용됩니다.
			</p>{' '}
			<h3 className="chapter__sub">7.2.7. componentDidUpdate 메서드</h3>
			<p className="chpater__contents">
				이것은 리렌더링을 완료한 후 실행합니다. 업데이트가 끝난 직후이므로, DOM
				관련 처리를 해도 무방합니다. 여기서는 prevProps 또는 prevState를
				사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있습니다. 또는
				getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을
				전달받을 수 있습니다.{' '}
			</p>
			<h3 className="chapter__sub">7.2.8. componenetWillUnMount 메서드</h3>
			<p className="chpater__contents">
				이것은 컴포넌트를 DOM에서 제거할 때 실행합니다. componenetDidMount에서
				등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야
				합니다.
			</p>
			<h3 className="chapter__sub">7.2.9. componentDidCatch 메서드</h3>
			<p className="chpater__contents">
				componentDidCatch 메서드는 리애그 v16에서 새롭게 도입되었으며, 컴포넌트
				렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류
				UI를 보여 줄 수 있게 해줍니다. 사용 방법은 다음과 같습니다.
				<img src={ls3} alt="ls3" className="chapter__imgs"></img>
				여기서 error는 파라미터에 어떤 에러가 발생했는지 알려 주며, info
				파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줍니다.
				앞의 코드에서는 그저 console.log 만 했지만, 나중에 실제로 사용할 때
				오류가 발생하면 서버 API를 호출하여 따로 수집할 수도 있습니다. <br />
				그러나 이 메서드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼
				수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는
				에러만 잡아낼 수 있다는 점을 알아두어야 합니다.
			</p>
		</div>
	);
}

export default Chapter7;
