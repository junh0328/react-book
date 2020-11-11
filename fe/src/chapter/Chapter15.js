import React from 'react';
import con1 from './imgs/chapter15/con1.png';
import con2 from './imgs/chapter15/con2.png';
import con3 from './imgs/chapter15/con3.png';
import con4 from './imgs/chapter15/con4.png';
import con5 from './imgs/chapter15/con5.png';

const Chapter15 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter 15, Context API</h1>
			<p>
				ContextAPI는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때
				유용한 기능입니다. 이를테면 사용자 로그인 정보, 애플리케이션 환경 설정,
				테마 등 여러 종류가 있겠지요. ContextAPI는 리액트 v16.3부터 사용하기
				쉽게 많이 개선되었습니다. 이 기능은 리액트 관련 라이브러리에서도 많이
				사용되고 있습니다. 예를 들어{' '}
				<span className="bright">
					리덕스, 리액트 라우터, styled-components 등의 라이브러리는 Context
					API를 기반으로 구현되어 있습니다.
				</span>
			</p>
			<h2 className="chapter__sub">
				15.1 Context API를 사용한 전역 상태 관리 흐름 이해하기
			</h2>
			<p>
				프로젝트 내에서 환경 설정, 사용자 정보와 같은 전역적으로 필요한 상태를
				관리해야 할 때는 어떻게 해야 할까요? 리액트 애플리케이션은 컴포넌트 간에
				데이터를 props로 전달하기 때문에 컴포넌트 여기저기서 필요한 데이터가
				있을 때는 주로 최상위 컴포넌트인 App의 state에 넣어서 관리합니다.
				<b>하지만,</b> 실제 리액트 프로젝트에서는 더 많은 컴포넌트를 거쳐야 할
				때도 있고 다루어야 하는 데이터가 훨씬 많아질 수도 있으므로, 이런 방식을
				사용하면 유지 보수성이 낮아질 가능성이 있습니다. <b>그렇기 때문에</b>{' '}
				리덕스나 MobX 같은 상태 관리 라이브러리를 사용하여 전역 상태 관리 작업을
				더 편하게 처리하기도 하는데요, 리액트 v16.3 업데이트 이후에는 Context
				API가 많이 개선되었기 때문에{' '}
				<span className="bright">
					별도의 라이브러리를 사용하지 않아도 전역 상태를 손쉽게 관리할 수
					있습니다. 기존에는 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로
					원하는 상태와 함수를 전달했지만, Context API를 사용하면 Context를
					만들어 단 한 번에 원하는 값을 받아 와서 사용할 수 있습니다.
				</span>
			</p>
			<h2 className="chapter__sub">15.2 Context API 사용법 익히기</h2>
			<h3 className="chapter__sub">15.2.1 새 Context 만들기</h3>
			<p>
				<img src={con1} alt="con1" className="chapter__imgs_w100"></img>새
				Context를 만들 때는 createContext 함수를 사용합니다. 파라미터에는 해당
				Context의 기본 상태를 지정합니다.
			</p>
			<h3 className="chapter__sub">15.2.2 Consumer 사용하기</h3>
			<p>
				이번에는 ColorBox라는 컴포넌트를 만들어서 ColorContext 안에 들어 있는
				색상을 보여 주겠습니다. 이때 색상을 props로 받아 오는 것이 아니라
				ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 색상을 조회할
				것입니다.
				<img src={con2} alt="con2" className="chapter__imgs"></img>
				ColorContext.Consumer 컴포넌트 사이에 <b>중괄호를 열어서</b> 그 안에
				함수를 넣어 주었습니다. 이러한 패턴은 <b>Function as a child</b>, 혹은{' '}
				<b>Render Props</b>라고 합니다. 컴포넌트의 children이 있어야 할 자리에
				일반 JSX 혹은 문자열이 아닌 함수를 전달하는 것이죠.
			</p>
			<p>
				컴포넌트를 다 만들었다면 이 컴포넌트를 App에서 렌더링합니다.
				<img src={con3} alt="con3" className="chapter__imgs"></img>
			</p>
			<h3 className="chapter__sub">15.2.3 Provider</h3>
			<p>
				Provider를 사용하면 Context의 value를 변경할 수 있습니다. App 컴포넌트를
				다음과 같이 수정합니다.
				<img src={con4} alt="con4" className="chapter__imgs"></img>
				코드를 저장하고 나면 다음과 같이 빨간색 정사각형이 나타날 것입니다.
				<img src={con5} alt="con5" className="chapter__imgs"></img>
				기존에 createContext 함수를 사용할 때는 파라미터로 Context의 기본값을
				넣어 주었습니다. 이 기본값은 Provider를 사용하지 않았을 때만 사용됩니다.
				만약 Provider는 사용했는데 value를 명시하지 않았다면, 이 기본값을
				사용하지 않기 때문에 오류가 발생합니다.
			</p>
		</div>
	);
};

export default Chapter15;
