import React from 'react';
import api1 from './imgs/chapter14/api01.png';
import api2 from './imgs/chapter14/api02.png';
import api3 from './imgs/chapter14/api03.png';
import api4 from './imgs/chapter14/api04.png';
import api5 from './imgs/chapter14/api05.png';
import api6 from './imgs/chapter14/api06.png';

const Chapter14 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">외부 API를 연동하여 뉴스 뷰어 만들기</h1>
			<p>
				지금까지 배운 것을 활용하여 카테고리별로 최신 뉴스 목록을 보여 주는 뉴스
				뷰어 프로젝트를 진행해 보겠습니다. https://newsapi.org/ 에서 제공하는
				API를 사용하여 데이터를 받아 오고, 9장에서 배운 styled-components를
				활용하여 프로젝트를 스타일링해 볼 것입니다.
			</p>
			<h2 className="chapter__sub">14.1 비동기 작업의 이해</h2>
			<p>
				웹 애플리케이션을 만들다 보면 처리할 때 시간이 걸리는 작업이 있습니다.
				예를 들어 웹 애플리케이션에서 서버 쪽 데이터가 필요할 때눈 Ajax 기법을
				사용하여 서버의 API를 호출함으로써 데이터를 수신합니다.{' '}
				<span className="bright">
					이렇게 서버의 API를 사용해야 할 때는 네트워크 송수신 과정에서 시간이
					걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지
					기다렸다가 전달받은 응답 데이터를 처리합니다.{' '}
				</span>
				이 과정에서 해당 작업을 비동기적으로 처리하게 됩니다.
			</p>
			<p>
				만약 작업을 비동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안
				중지 상태가 되기 때문에 다른 작업을 할 수 없습니다. 그리고 요청이 끝나야
				비로소 그다음 예정 작업을 할 수 있죠. 하지만 이를 동기적으로 처리한다면
				웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수
				있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.
			</p>
			<p>
				자바스크립트에서 비동기 작업을 할 때 가장 흔히 사용하는 방법은 콜백
				함수를 사용하는 것입니다. 위 코드에서 printMe가 3초 뒤에 호출되도록
				printMe 함수 자체를 setTimeout 함수의 인자로 전달해 주었는데, 이런
				함수를 <b>콜백 함수</b>라고 부릅니다.
			</p>
			<img src={api1} alt="api1" className="chapter__imgs_w40" />
			<h3 className="chapter__sub">14.1.1 콜백 함수</h3>
			<p>
				이번에는 1초에 걸쳐서 10,20,30,40 과 같은 형태로 여러 번 순차적으로
				처리하는 콜백 함수를 만들어 보겠습니다.
				<img src={api2} alt="api2" className="chapter__imgs"></img>
				위와 같이 콜백 안에 또 콜백을 넣어서 구현할 수 있는데, 너무 여러 번
				중첩되니까 코드의 가독성이 나빠졌습니다. 이러한 형태를{' '}
				<b>'콜백 지옥'</b>
				이라고 부릅니다. 지양해야 할 형태의 코드죠
			</p>
			<h3 className="chapter__sub">14.1.2 Promise</h3>
			<p>
				Promise는 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된
				기능입니다. 앞에서 본 코드를 Promise를 사용하여 재구현해 보았습니다.
				<img src={api3} alt="api3" className="chapter__imgs" />
				<img src={api4} alt="api4" className="chapter__imgs" />
				<img src={api5} alt="api5" className="chapter__imgs" />
				여러 작업을 연달아 처리한다고 해서 함수를 여러 번 감싸는 것이 아니라
				.then을 사용하여 그다음 작업을 설정하기 때문에 콜백 지옥이 형성되지
				않습니다.
			</p>
			<h3 className="chapter__sub">14.1.3 async/await</h3>
			<p>
				async/await는 Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES2017(ES8)
				문법입니다. 이 문법을 사용하려면 함수의 앞부분에 async 키워드를
				추가하고, 해당 함수 내부에서 Promise의 앞 부분에 await 키워드를
				사용합니다. 이렇게 하면 Promise가 끝날 떄까지 기다리고, 결과 값을 특정
				변수에 담을 수 있습니다.
				<img src={api3} alt="api3" className="chapter__imgs" />
				<img src={api6} alt="api6" className="chapter__imgs" />
			</p>
			<h2 className="chapter__sub">
				14.2 axios로 API 호출해서 데이터 받아 오기
			</h2>
			<p>
				axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트입니다.
				이 라이브러리의 특징은 HTTP 요청을 Promise 기반으로 처리한다는 점입니다.
				리액트 프로젝트를 생성하여 이 라이브러리를 설치하고 사용하는 방법을 한번
				알아보겠습니다.
			</p>
		</div>
	);
};

export default Chapter14;
