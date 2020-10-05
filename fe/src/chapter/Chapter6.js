import React from 'react';
import map1 from './imgs/chapter6/map1.png';
import map2 from './imgs/chapter6/map2.png';
import map3 from './imgs/chapter6/map3.png';

function Chapter6() {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter6 컴포넌트 반복</h1>
			<h2 className="chapter__sub">6.1 자바스크립트 배열의 map 함수</h2>
			<p className="chapter__contents">
				자바스크립트 배열 객체의 내장 함수인 map함수를 사용하여 반복되는
				컴포넌트를 렌더링할 수 있습니다. map 함수는 파라미터로 전달된 함수를
				사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운
				배열을 생성합니다.
			</p>
			<h3 className="chapter__sub">6.1.1 문법</h3>
			<b>arr.map(callback, [thisArg])</b>
			<ul>
				<li>이 함수의 파라미터는 다음과 같습니다.</li>
				<li>
					{' '}
					<b>
						1. call back: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음
						세 가지입니다.{' '}
					</b>
					<li className="inner_li">- currentValue: 현재 처리하고 있는 요소</li>
					<li className="inner_li">
						- index: 현재 처리하고 있는 요소의 index 값
					</li>
					<li className="inner_li">- array: 현재 처리하고 있는 원본 배열</li>
				</li>
				<li>
					{' '}
					<b>2. thisArg(선택 항목): callback 함수 내부에서 사용할 this</b>
				</li>
			</ul>
			<h3 className="chapter__sub">6.1.2 예제</h3>
			<p className="chapter__contents">
				ES6 문법을 사용한 예제입니다. result 값을 콘솔에 찍으면 1,4,9,16,25 가
				나오겠죠?
			</p>
			<img src={map1} alt="map1" className="chapter__imgs"></img>

			<h2 className="chapter__sub">
				6.2 데이터 배열을 컴포넌트 배열로 변환하기
			</h2>
			<p className="chapter__contents">
				<img src={map2} alt="map2" className="chapter__imgs"></img>
				문자열로 구성된 배열을 선언합니다. 그 배열 값을 사용하여 li태그 안의 JSX
				코드로 된 배열을 새로 생성한 후 nameList에 넣습니다. <br />
				원하는 대로 렌더링이 되었지만, 콘솔창을 확인해보면 완벽하지 않습니다.
				key 값이 없다는 경고 메세지를 볼 수 있을 겁니다.
			</p>
			<h2 className="chapter__sub">6.3 key</h2>
			<p className="chapter__contents">
				리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이
				있었는지 알아내려고 사용합니다. 예를 들어 유동적인 데이터를 다룰 때는
				원소를 새로 생성할 수도, 제거할 수도, 수정할 수도 있습니다. key가 없을
				때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서
				변화를 감지합니다. 하지만 key가 있다면 이 값을 사용하여 어떤 변화가
				일어났느지 더욱 빠르게 알아낼 수 있습니다.
			</p>
			<h3 className="chapter__sub">6.3.1 key 설정</h3>
			<p className="chapter__contents">
				key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트
				props를 설정하듯이 설정하면 됩니다.{' '}
				<b>key 값은 언제나 유일해야 합니다.</b> 따라서 데이터가 가진 고윳값을
				key 값으로 설정해야 합니다. 예를 들어 다음과 같이 게시판의 게시물을
				렌더링한다면 게시물 번호를 key 값으로 설정해야 합니다. 하지만, 앞서
				만들었던 예제 컴포넌트에는 이런 고유 번호가 없습니다. 이때는 map 함수에
				전달되는 콜백 함수의 인수인 index 값을 사용하면 됩니다.
				<img src={map3} alt="map3" className="chapter__imgs"></img>
				현재는 고유한 값인 id가 없기 때문에 index를 키값으로 주었지만,{' '}
				<b>
					index를 키값으로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지
					못합니다.
				</b>
			</p>
		</div>
	);
}

export default Chapter6;
