import React from 'react';
import hook1 from './imgs/chapter8/hook1.png';
import hook2 from './imgs/chapter8/hook2.png';
import hook3 from './imgs/chapter8/hook3.png';
import hook4 from './imgs/chapter8/hook4.png';
import hook5 from './imgs/chapter8/hook5.png';
import hook6 from './imgs/chapter8/hook6.png';
import hook7 from './imgs/chapter8/hook7.png';
import hook8 from './imgs/chapter8/hook8.png';
import hook9 from './imgs/chapter8/hook9.png';
import hook10 from './imgs/chapter8/hook10.png';
import hook11 from './imgs/chapter8/hook11.png';

const Chapter8 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter8, Hooks</h1>
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
			</p>
			<p className="chapter__contents">
				useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터
				배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다. 컴포넌트가
				언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
				useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 합니다. return ()
				함수를 통해 콘솔창에 'cleanup' 이라는 문자열을 찍어주었습니다. 렌더링이
				될 때마다 뒷정리 함수가 계속 나타나는 것을 확인할 수 있습니다. 그리고
				뒷정리 함수가 호출될 때는 업데이트가 되기 직전의 값을 보여줍니다. 오직
				언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째
				파라미터에 비어 있는 배열을 넣으면 됩니다.{' '}
			</p>
			<ul className="chapter__ul">
				<li className="chapter__li">
					[], 빈 괄호이면 오직 언마운트 시에만 실행
				</li>
				<li className="chapter__li">
					[name], 이라면 name 값에 변화가 있을 때(update)마다 실행
				</li>
			</ul>
			<h2 className="chapter__sub">8.3 useReducer</h2>
			<p className="chapter__contents">
				<b>
					useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를
					다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook입니다.
				</b>{' '}
				리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은
				액션(action)값을 전달받아서 새로운 상태를 반환하는 함수입니다. 리듀서
				함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 합니다.
				<img src={hook4} alt="hook4" className="chapter__imgs" />
				<b>
					useReducer의 첫 번째 파라미터에는 (우리가 만든) 리듀서 함수를 넣고, 두
					번째 파라미터에는 해당 리듀서의 기본 값 (초기 값)을 지정해 줍니다.{' '}
				</b>
				이 Hook을 사용하면 state 값과 dispatch 함수를 받아 오는데요, 여기서
				state는 현재 가리키고 있는 상태고, dispatch는 액션을 방생시키는
				함수입니다. dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션
				값을 넣어 주면 리듀서 함수가 호출되는 구조입니다.{' '}
				<b>
					useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을
					컴포넌트 바깥으로 빼낼 수 있다는 것입니다.
				</b>
			</p>
			<ul className="chapter__ul">
				<li className="chapter__li">- state: 현재 가리키고 있는 상태</li>
				<li className="chapter__li">
					- dispatch(action): 액션을 발생시키는 함수
				</li>
				<li className="chapter__li">
					- 액션은 reducer에서 특정조건(switch)문을 통해 만든 case문이다.
				</li>
			</ul>
			<h3 className="chapter__sub">8.3.2 인풋 상태 관리하기 </h3>
			<p className="chpater__contents">
				useReducer를 사용하여 Info 컴포넌트에서 인풋 상태를 관리해 보겠습니다.
				기존에는 인풋이 여러 개여서 useState를 여러 번 사용했는데요,
				useReducer를 사용하면 기존에 클래스형 컴포넌트에서 input태그에 name값을
				할당하고 e.target.name 을 참조하여 useState를 해 준 것과 유사한 방식으로
				작업을 처리할 수 있습니다.
				<img src={hook5} alt="hook5" className="chapter__imgs" />
				useReducer에서의 액션은 그 어떤 값도 사용 가능합니다. 그래서 이번에는
				이벤트 객체가 지니고 있는 e.target 값 자체를 액션 값으로 사용했습니다.
				이런 식으로 인풋을 관리하면 아무리 인풋의 개수가 많아져도 코드를 짧고
				깔끔하게 유지할 수 있습니다.
			</p>
			<h2 className="chapter__sub">8.4 useMemo</h2>
			<p className="chapter__contents">
				useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수
				있습니다. 먼저 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여주는
				함수형 컴포넌트를 작성해 봅시다.
				<img src={hook6} alt="hook6" className="chapter__imgs" />
				<img src={hook7} alt="hook7" className="chapter__imgs" />
				하지만 이렇게 되면 숫자를 등록할 때뿐만 아니라, 인풋 내용이 수정될 때도
				우리가 만든 getAverage 함수가 호출되는 것을 확인할 수 있습니다. 인풋
				내용이 바뀔 때는 평균값을 다시 계산할 필요가 없는데, 이렇게 렌더링할
				때마다 계산하는 것은 낭비입니다.
			</p>
			<p>
				{' '}
				따라서 useMemo를 사용하면 이러한 작업을 최적화할 수 있습니다. 렌더링하는
				과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지
				않았다면 이전에 연산했던 결과를 다시 사용하는 방식입니다.
				<img src={hook8} alt="hook8" className="chapter__imgs" />
				<img src={hook9} alt="hook9" className="chapter__imgs" />
				useMemo 또한 useEffect의 형식과 같이 마운트시에만 렌더링 시키기 위해서
				배열([ ])안에 해당 내용을 작성합니다. 따라서 현재는 list 배열의 내용이
				바뀔 때만 getAverage 함수가 호출됩니다.
			</p>

			<h2 className="chpater__sub">8.5 useRef</h2>
			<p className="chpater__contents">
				useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다.
				Average 컴포넌트에서 등록 버튼을 눌렀을 때 포커스가 인풋 쪽으로
				넘아가도록 코드를 작성해 보겠습니다.
				<img src={hook10} alt="hook10" className="chapter__imgs" />
				<img src={hook11} alt="hook11" className="chapter__imgs" />
				useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current
				값이 실제 엘리먼트를 가리킵니다.
			</p>
			<p className="chapter__contents">
				리액트 메뉴얼에 따르면, 기존의 클래스형 컴포넌트는 앞으로도 계속해서
				지원될 예정입니다. 그렇기 때문에 만약 유지 보수하고 있는 프로젝트에서
				클래스형 컴포넌트를 사용하고 있다면, 이를 굳이 함수형 컴포넌트와 Hooks를
				사용하는 형태로 전환할 필요는 없습니다. 다만, 메뉴얼에서는 새로 작성하는
				컴포넌트의 경우 함수형 컴포넌트와 Hooks를 사용할 것을 권장하고 있습니다.
			</p>
		</div>
	);
};

export default Chapter8;
