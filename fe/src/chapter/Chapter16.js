import React from 'react';
import redux1 from './imgs/chapter16/redux1.png';
import redux2 from './imgs/chapter16/redux2.png';
import redux3 from './imgs/chapter16/redux3.png';
import redux4 from './imgs/chapter16/redux4.png';

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
			</p>
		</div>
	);
};

export default Chapter16;
