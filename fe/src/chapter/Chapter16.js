import React from 'react';
import redux1 from './imgs/chapter16/redux1.png';
import redux2 from './imgs/chapter16/redux2.png';
import redux3 from './imgs/chapter16/redux3.png';
import redux4 from './imgs/chapter16/redux4.png';
import redux5 from './imgs/chapter16/redux5.png';
import redux6 from './imgs/chapter16/redux6.png';
import redux7 from './imgs/chapter16/redux7.png';
import redux8 from './imgs/chapter16/redux8.png';

const Chapter16 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter 16, 리덕스 라이브러리 이해하기</h1>
			<p>
				리덕스는 가장 많이 사용하는 리액트 상태 관리 라이브러리입니다. 리덕스를
				사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서
				더욱 효율적으로 관리할 수 있습니다. 또한, 컴포넌트끼리 똑같은 상태를
				공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값을 전달하거나
				업데이트할 수 있습니다. 단순히 전역 상태 관리만 한다면 Context API를
				사용하는 것만으로도 충분하지만, 리덕스를 사용하면 상태를 더욱 체계적으로
				관리할 수 있기 때문에 프로젝트의 규모가 클 경우에는 리덕스를 사용하는
				편이 좋습니다. 코드의 유지 보수성도 높여 주고 작업 효율도 극대화해 주기
				때문입니다. 추가로 아주 편리한 개발자 도구도 지원하며, 미들웨어라는
				기능을 제공하여 비동기 작업을 훨씬 효율적으로 관리할 수 있게 해 주기도
				합니다.
			</p>
			<h2 className="chapter__sub">16.1 개념 미리 정리하기</h2>
			<p>
				앞으로 리덕스를 사용하면서 접하게 될 키워드의 개념을 우선 간략히
				알아보겠습니다. 도중에 잘 이해되지 않는 내용은 나중에 직접 사용해 본
				다음 이 절로 다시 돌아와서 읽으면 더욱 잘 이해될 것입니다.
			</p>
			<h3 className="chapter__sub">16.1.1 액션</h3>
			<p>
				상태에 어떠한 변화가 필요하면 액션(action)이란 것이 발생합니다. 이는
				하나의 객체로 표현되는데, 다음과 같은 형식으로 이루어져 있습니다.
				<img src={redux1} alt="redux1" className="chapter__imgs_w40" />
				액션 객체는 type 필드를 반드시 가지고 있어야 합니다. 이 값을 액션의
				이름이라고 생각하면 됩니다. 그리고 그 외의 값들은 나중에 상태 업데이트를
				할 때 참고해야 할 값이며, 작성자 마음대로 넣을 수 있습니다.
				<img src={redux2} alt="redux2" className="chapter__imgs_w40" />
			</p>
			<h3 className="chapter__sub">16.1.2 액션 생성 함수</h3>
			<p>
				액션 생성 함수(action creator)는 액션 객체를 만들어 주는 함수입니다.
				<img src={redux3} alt="redux3" className="chapter__imgs_w40" />
				어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션
				객체를 직접 작성하기 번거로울 수 있고, 만드는 과정에서 실수로 놓칠 수도
				있습니다. 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리합니다.
			</p>
			<h3 className="chapter__sub">16.1.3 리듀서</h3>
			<p>
				리듀서(reducer)는 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면
				리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 옵니다. 그리고
				두 값을 참고하여 새로운 상태를 만들어서 반환해 줍니다.
				<img src={redux4} alt="redux4" className="chapter__imgs" />
			</p>
			<h3 className="chapter__sub">16.1.4 스토어</h3>
			<p>
				프로젝트에 리덕스를 적용하기 위해 스토어(store)를 만듭니다. 한 개의
				프로젝트는 단 하나의 스토어만 가질 수 있습니다. 스토어 안에는 현재
				애플리케이션 상태(state)와 리듀서(reducer)가 들어가 있으며, 그 외에도 몇
				가지 중요한 내장 함수를 지닙니다.
			</p>
			<h3 className="chapter__sub">16.1.5 디스패치</h3>
			<p>
				디스패치(dispatch)는 스토어의 내장 함수 중 하나입니다. 디스패치는
				'액션을 발생시키는 것'이라고 이해하면 됩니다. 이 함수는
				dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출합니다.
				이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를
				만들어 줍니다.
			</p>
			<h3 className="chapter__sub">16.1.6 구독</h3>
			<p>
				구독(subscribe)도 스토어의 내장 함수 중 하나입니다. subscribe 함수 안에
				리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이
				디스패치되어 상태가 업데이트될 때마다 호출됩니다.
				<img src={redux5} alt="redux5" className="chapter__imgs" />
			</p>
			<h2 className="chapter__sub">
				16.2 리액트 없이 쓰는 리덕스, 바닐라 리덕스
			</h2>
			<p>
				리덕스는 리액트에 종속되는 라이브러리가 아닙니다. 리액트에서 사용하려고
				만들어졌지만 실제로 다른 UI 라이브러리/프레임워크와 함께 사용할 수도
				있습니다. 리덕스는 바닐라(vanila) 자바스크립트와 함께 사용할 수도
				있습니다. 바닐라 자바스크립트는 라이브러리나 프레임워크 없이 사용하는
				순수 자바스크립트 그 자체를 의미합니다.
			</p>
			<img src={redux6} alt="redux6" className="chapter__imgs" />
			<p>
				앞으로 만들 프로젝트는 ADD 버튼과 MINUS 버튼을 통해 숫자의 state(0)을/를
				관리합니다.
				<img src={redux7} alt="redux7" className="chapter__imgs" />
				<img src={redux8} alt="redux8" className="chapter__imgs" />
			</p>
			<ul>
				<li>
					1. DOM 레퍼런스를 통해 자바스크립트로 add 버튼과 minus 버튼, number인
					0 을 선택할 수 있게 만듭니다.
				</li>
				<li>
					2. reducer의 기능을 사용하기 위해 createStore(reducer)를 변수 store로
					선언합니다.
				</li>
				<li>
					3. 리듀서 함수를 정의합니다. 리듀서 함수는 2개의 파라미터를 받는데, 첫
					번째 파라미터는 state(초기 상태)이고, 두 번째 파라미터는 action입니다.
				</li>
				<li>
					3.1. Switch 문을 통해 action의 type을 관리하는데, type을 변수로 선언해
					두면 콘솔창에서 오류상태를 관리할 수 있습니다.
				</li>
				<li>
					4. DOM으로 받은 객체 (add, minus) 에 addEventListener를 추가하여
					버튼이 클릭될 때 dispatch 시킬 함수 (type: --- )를 넣는다.
				</li>
				<li>
					5. reducer 함수를 통해 dispatch 시킨 함수의 변화된 값을 리턴받는다.
				</li>
				<li>
					5.1. onChange( ) 함수를 통해 리턴받은 현재 상태를 number에 넣어준다.
				</li>
				<li>
					6. 스토어의 값(초기 값)이 바뀔 때마다 방금 만든 onChange 함수가
					호출되도록 해 준다.
				</li>
				<li>
					6.1. 이 작업은 스토어의 내장 함수 subscribe를 사용하여 수행할 수
					있습니다.
				</li>
			</ul>
			<h2 className="chapter__sub">리덕스의 세 가지 규칙</h2>
			<h3 className="chapter__sub">16.3.1 단일 스토어</h3>
			<p>
				하나의 애플리케이션 안에는 하나의 스토어가 들어 있습니다. 사실 여러 개의
				스토어를 사용하는 것이 완전히 불가능하지는 않습니다. 특정 업데이트가
				너무 빈번하게 일어나거나 애플리케이션의 특정 부분을 완전히 분리시킬 때
				여러 개의 스토어를 만들 수도 있지만, 상태 관리가 복잡해질 수 있으므로
				권장하지 않습니다.
			</p>
			<h3 className="chapter__sub">16.3.2 읽기 전용 상태</h3>
			<p>
				리덕스 상태는 읽기 전용입니다. 기존에 리액트에서 setState를 사용하여
				state를 업데이트할 때도 객체나 배열을 업데이트하는 과정에서 불변성을
				지켜주기 위해 spread 연산자를 사용하거나 immer와 같은 불변성
				라이브러리를 사용했습니다. 리덕스도 마찬가지로 상태를 업데이트할 때는
				기존의 객체를 건드리지 않고 새로운 객체를 생성해 주어야 합니다.
			</p>
			<p>
				리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경되는
				것을 감지하기 위해 얕은 비교(shallow equality) 검사를 하기 때문입니다.
				객체의 변화를 감지할 때 객체의 깊숙한 안쪽까지 비교하는 것이 아니라
				겉핥기 식으로 비교하여 좋은 성능을 유지할 수 있는 것입니다.
			</p>
			<h3 className="chapter__sub">16.3.3 리듀서는 순수한 함수</h3>
			<p>
				변화를 일으키는 리듀서 함수는 순수한 함수여야 합니다. 순수한 함수는 다음
				조건을 만족합니다.
				<br /> 1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다.
				<br /> 2. 파라미터 외의 값에는 의존하면 안 됩니다.
				<br /> 3. 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를
				만들어서 변환합니다.
				<br /> 4. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을
				반환해야 합니다.
			</p>
			<p>
				리듀서를 작성할 때는 위 네가지 사항을 주의해야 합니다. 예를 들어 리듀서
				함수 내부에서 랜덤 값을 만들거나, Date 함수를 사용하여 현재 시간을
				가져오거나, 네트워크 요청을 한다면, 파라미터가 같아도 다른 결과를 만들어
				낼 수 있기 때문에 사용하면 안됩니다. 이러한 작업은 리듀서 함수 바깥에서
				처리해 주어야 합니다. 액션을 만드는 과정에서 처리해도 되고, 추후 배울
				리덕스 미들웨어에서 처리해도 됩니다. 주로 네트워크 요청과 같은 비동기
				작업은 미들웨어를 통해 관리합니다.
			</p>
		</div>
	);
};

export default Chapter16;
