import React from 'react';
import hook1 from './imgs/chapter8/hook1.png';
import hook2 from './imgs/chapter8/hook2.png';
import hook3 from './imgs/chapter8/hook3.png';

const Chapter8 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Hooks</h1>
			<p className="chapter__contents">
				Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태
				관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의
				기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할
				수 있게 해줍니다.
			</p>
			<h2 className="chapter__sub">8.1 useState</h2>
			<p className="chapter__contents">
				useState는 가장 기본적인 Hook이며, 함수형 컴포넌트에서도 가변적인 상태를
				지닐 수 있게 해줍니다. 3장에서도 이미 사용해 보았는데, 이번 장에서 다시
				복습해 봅시다. 만약 함수형 컴포넌트에서 상태를 관리해야 한다면 이 Hook을
				사용하면 됩니다.
				<img src={hook1} alt="hook1" className="chapter__imgs"></img>
			</p>
			<h2 className="chapter__sub">8.2 useEffect</h2>
			<p className="chapter__contents">
				useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록
				설정할 수 있는 Hook입니다. 클래스형 컴포넌트의 <b>componentDidMount</b>
				와 <b>componentDidUpdate</b>가 합쳐진 형태로 보아도 무방합니다. 기존에
				만들었던 컴포넌트에 useEffect를 적용해 보겠습니다.
				<img src={hook2} alt="hook2" className="chapter__imgs"></img>
				<img src={hook3} alt="hook3" className="chapter__imgs"></img>
				useEffect를 통해 특정 벨류값이 업데이트될 때 마다 콘솔창에서 표기해줄 수
				있습니다. 해당 파일에서는 Input으로 name과 nickname을 받았는데, name의
				값(밸류)가 업데이트 될 때마다 useEffect를 실행하도록 하였습니다.
				useEffect 함수의 맨 마지막 부분을 보면 배열에 [name]이 담겨 있음을 알 수
				있습니다. 위와 같이 []배열에 들어가는 값이 업데이트
				(componentDidUpdate)될 때마다 콘솔창에 표기할 수 있습니다.
				<p>
					useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째
					파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다.
					컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을
					수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야
					합니다. return () 함수를 통해 콘솔창에 'cleanup' 이라는 문자열을
					찍어주었습니다. 렌더링이 될 때마다 뒷정리 함수가 계속 나타나는 것을
					확인할 수 있습니다. 그리고 뒷정리 함수가 호출될 때는 업데이트가 되기
					직전의 값을 보여줍니다. 오직 언마운트될 때만 뒷정리 함수를 호출하고
					싶다면 useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣으면
					됩니다.{' '}
					<ul>
						<li>[], 빈 괄호이면 오직 언마운트 시에만 실행</li>
						<li>[name], 이라면 name 값에 변화가 있을 때(update)마다 실행</li>
					</ul>
				</p>
			</p>
		</div>
	);
};

export default Chapter8;
