import React from 'react';
import rredux1 from './imgs/chapter17/rredux1.png';
import rredux2 from './imgs/chapter17/rredux2.png';
import rredux3 from './imgs/chapter17/rredux3.png';
import rredux4 from './imgs/chapter17/rredux4.png';
import rredux5 from './imgs/chapter17/rredux5.png';
import rredux6 from './imgs/chapter17/rredux6.png';

const Chapter17 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">
				Chapter17, 리덕스를 사용한 리액트 상태 관리 애플리케이션
			</h1>
			<p>
				소규모 프로젝트에서는 컴포넌트가 가진 state를 사용하는 것만으로도
				충분하지만, 프로젝트의 규모가 커짐에 따라 상태 관리가 번거로워질 수
				있습니다. 리액트에서 리덕스 라이브러리를 사용하면, 상태 업데이트에 관한
				로직을 모듈로 따로 분리하여 컴포넌트 파일과 별개로 관리할 수 있으므로
				코드를 유지 보수하는 데 도움이 됩니다. 또한, 여러 컴포넌트에서 동일한
				상태를 공유해야 할 때 매우 유용하며, 실제 업데이트가 필요한 컴포넌트만
				리렌더링되도록 쉽게 최적화해 줄 수도 있습니다.
			</p>
			<p>
				앞에서 바닐라 자바스크립트 환경에서 리덕스를 사용할 때 스토어의 내장
				함수인 store.dispatch와 store.subscribe 함수를 사용했습니다. 하지만,
				리액트 애플리케이션에서 리덕스를 사용할 때는 store 인스턴스를 직접
				사용하기보다는 주로 react-redux라는 라이브러리에서 제공하는 유틸
				함수(connect)와 컴포넌트(Provider)를 사용하여 리덕스 관련 작업을
				처리합니다.
			</p>
			<h2 className="chapter__sub">17.1 UI 준비하기</h2>
			<p>
				리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은
				<b>프레젠테이셔널 컴포넌트</b>와 <b>컨테이너 컴포넌트</b>를 분리하는
				것입니다. 여기서 프레젠테이셔널 컴포넌트란 주로 상태 관리가 이루어지지
				않고, 그저 props를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트를
				말합니다. 이와 달리 컨테이너 컴포넌트는 리덕스와 연동되어 있는
				컴포넌트로, 리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을
				디스패치하기도 합니다.
			</p>
			<p>
				기본적인 상태 변화 없이 카운트를 할 수 있는 컴포넌트와 할 일 목록
				컴포넌트를 만들고, 리덕스를 통해 관리하는 작은 프로젝트를 만들어
				보겠습니다.
			</p>
			<h3 className="chapter__sub">17.1.1 카운터 컴포넌트 만들기</h3>
			<img src={rredux1} alt="rredux1" className="chapter__imgs" />
			<h3 className="chapter__sub">17.1.2 할 일 목록 컴포넌트 만들기</h3>
			<img src={rredux2} alt="rredux2" className="chapter__imgs" />
			<h3 className="chapter__sub">17.1.3 App에서 컴포넌트 합치고 보여주기</h3>
			<img src={rredux3} alt="rredux3" className="chapter__imgs" />
			<p>
				위의 두 컴포넌트를 합쳐 App에 받아오게 되면 다음과 같이 렌더링됩니다.
			</p>
			<img src={rredux4} alt="rredux4" className="chapter__imgs_w40" />
			<h2 className="chapter__sub">17.2 리덕스 관련 코드 작성하기</h2>
			<p>
				이제 프로젝트에 리덕스를 사용해 보겠습니다. 리덕스 관련 코드를
				준비합니다. 리덕스를 사용할 때는 <b>액션 타입</b>, <b>액션 생성 함수</b>
				, <b>리듀서 코드</b>를 작성해야 합니다. 이 코드들을 각각 다른 파일에
				작성하는 방법이 있고, 기능별로 묶어서 파일 하나에 작성하는 방법도
				있습니다.
				<img src={rredux5} alt="rredux5" className="chapter__imgs_w40" />위
				그림은 가장 일반적인 구조로 actions, constants, reducers 라는 세 개의
				디렉터리를 만들고 그 안에 기능별로 파일을 하나씩 만드는 방식입니다.
				코드를 종류에 따라 다른 파일에 작성하여 정리할 수 있어서 편리하지만,
				새로운 액션을 만들 때마다 세 종류의 파일을 모두 수정해야 하기 때문에
				불편하기도 합니다. 이 방식은 리덕스 공식 문서에도 사용되므로 가장
				기본적이라 할 수 있지만, 사람에 따라서는 불편할 수도 있는 구조입니다.
			</p>
			<p>
				<img src={rredux6} alt="rredux6" className="chapter__imgs_w40" />
				이러한 방식을 더욱 편리하기 사용하기 위해 만든 패턴을 Ducks 패턴이라고
				부르며, 다음과 같은 방식으로 사용됩니다. Ducks 패턴은 액션 타입, 액션
				생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는
				방식입니다. 리덕스 관련 코드에 대한 디렉터리 구조는 정해진 방법이 없기
				때문에 마음대로 작성해도 되지만, 위 두가지 방법이 주로 사용됩니다.
			</p>
		</div>
	);
};

export default Chapter17;
