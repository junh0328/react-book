import React from 'react';
import ls1 from './imgs/chapter7/ls1.png';
import ls2 from './imgs/chapter7/ls2.png';

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
			<p className="chapter__contents">
				<h2>마운트</h2>
				DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 합니다. 마운트
				시에는 호출하는 메서드가 차례대로 나옵니다.
				<ul>
					<li className="big">
						- constructor: 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자
						메서드
					</li>
					<li className="big">
						- getDerivedStateFromProps: props에 있는 값을 state에 넣을 때
						사용하는 메서드
					</li>
					<li className="big">
						- render: 우리가 준비한 UI를 렌더링하는 메서드
					</li>
					<li className="big">
						- componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는
						메서드
					</li>
				</ul>
				<h2>업데이트</h2>
				컴포넌트는 다음과 같은 총 네가지 경우에 업데이트합니다.
				<ul>
					<li className="big">1. props가 바뀔 때</li>
					<li className="big">2. state가 바뀔 때</li>
					<li className="big">3. 부모 컴포넌트가 리렌더링될 때</li>
					<li className="big">
						4. this.forceUpdate로 강제 렌더링을 트리거할 때
					</li>
				</ul>
				이렇게 컴포넌트를 업데이트할 때는 다음 메서드를 호출합니다.
				<ul>
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
				<h2>언마운트</h2>
				<p className="chapter__contents">
					마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고
					합니다.
				</p>
				<img src={ls2} alt="ls2" className="chapter__imgs_w100" />
			</p>
			<p className="chapter__contents">
				라이프 사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행하는
				메서드입니다. 이 메서드들은 서드파티 라이브러리를 사용하거나, DOM을 직접
				건드려야할 때 유용하게 사용됩니다. 추가로 컴포넌트 업데이트의 성능을
				개선할 때는 shouldComponentUpdate가 중요하게 사용됩니다.
				<br /> shouldComponentUpdate를 사용하여 컴포넌트의 업데이트 성능을
				개선하는 내용은 11장에서 다루겠습니다.
			</p>
		</div>
	);
}

export default Chapter7;
