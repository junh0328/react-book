import React from 'react';
import rredux1 from './imgs/chapter17/rredux1.png';
import rredux2 from './imgs/chapter17/rredux2.png';
import rredux3 from './imgs/chapter17/rredux3.png';
import rredux4 from './imgs/chapter17/rredux4.png';
import rredux5 from './imgs/chapter17/rredux5.png';
import rredux6 from './imgs/chapter17/rredux6.png';
import rredux7 from './imgs/chapter17/rredux7.png';
import rredux8 from './imgs/chapter17/rredux8.png';
import rredux9 from './imgs/chapter17/rredux9.png';
import rredux10 from './imgs/chapter17/rredux10.png';
import rredux11 from './imgs/chapter17/rredux11.png';
import rredux12 from './imgs/chapter17/rredux12.png';
import rredux13 from './imgs/chapter17/rredux13.png';

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
			<h3 className="chapter__sub">17.2.1 counter 모듈 작성하기</h3>
			<p>
				Ducks 패턴을 사용하여{' '}
				<span className="bright">
					액션 타입, 액션 생성 함수, 리듀서를 작성한 코드
				</span>
				를 '모듈'이라고 합니다. 먼저 counter 모듈을 작성해 봅시다.
			</p>
			<h3 className="chapter__sub">17.2.1.1 액션 타입 정의하기</h3>
			<p>
				가장 먼저 해야 할 작업은 액션 타입을 정의하는 것입니다. 액션 타입은
				대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로
				작성합니다. 문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가 커졌을
				때 액션의 이름이 충돌되지 않게 해 줍니다. 예를 들어 SHOW 혹은
				INITIALIZE라는 이름을 가진 액션은 쉽게 중복될 수 있겠죠? 하지만 앞에
				모듈 이름을 붙여 주면 액션 이름이 겹치는 것을 걱정하지 않아도 됩니다.
				<img src={rredux7} alt="rredux7" className="chapter__imgs_w40" />
			</p>
			<h3 className="chapter__sub">17.2.1.2 액션 생성 함수 만들기</h3>
			<p>
				더 필요하거나 추가할 값이 없으니 그냥 위와 같이 만들어 주면 됩니다.
				중요한 것은 export 키워드를 붙여 추후 이 함수를 다른 파일에서 불러와
				사용할 수 있게 만들어야 합니다.
				<img src={rredux8} alt="rredux8" className="chapter__imgs_w40" />
			</p>
			<h3 className="chapter__sub">17.2.1.3 초기 상태 및 리듀서 함수 만들기</h3>
			<p>
				이 모듈의 초기 상태에는 number 값을 설정해 주었으며, 리듀서 함수에는
				현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드를 작성해
				주었습니다.
			</p>
			<p>
				조금 전에 만든 액션 생성 함수는 export로 내보내 주었고, 이번에 만든
				리듀서는 export default로 내보내 주었습니다. 두 방식의 차이점은 export는
				여러 개를 내보낼 수 있지만 export default는 단 한 개만 내보낼 수있다는
				것 입니다.
				<img src={rredux9} alt="rredux9" className="chapter__imgs" />
			</p>
			<h3 className="chapter__sub">17.2.2 todos 모듈 만들기</h3>
			<h3 className="chapter__sub">
				17.3.2.1,2 액션 타입 정의 및 액션 생성함수 만들기
			</h3>
			<p>
				이전과 마찬가지로 가장 먼저 해야 할 일은 액션타입 정의입니다. 다음으로
				액션 생성 함수를 만듭니다. 조금 전과 달리 이번에는 액션 생성 함수에서
				파라미터가 필요합니다. 전달받은 파라미터는 액션 객체 안에 추가 필드로
				들어가게 됩니다.
				<img src={rredux10} alt="rredux10" className="chapter__imgs" />
			</p>
			<h3 className="chapter__sub">17.2.2.3 초기 상태 및 리듀서 함수 만들기</h3>
			<p>
				spread 연산자를 사용하여, 초기 상태 및 리듀ㅠ서 함수를 작성합니다.
				객체에 한 개 이상의 값이 들어가므로 불변성을 유지해야 합니다. 배열에
				변화를 줄 때는 배열 내장 함수를 사용하여 구현하면 됩니다.
				<img src={rredux11} alt="rredux11" className="chapter__imgs_w40" />
				<img src={rredux12} alt="rredux12" className="chapter__imgs" />
			</p>
			<h3 className="chapter__sub">17.2.3 루트 리듀서 만들기</h3>
			<p>
				이번 프로젝트에서는 리듀서를 여러 개 만들었습니다. 나중에 createStore
				함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 합니다.
				그렇게 때문에 기존에 만들었던 리듀서를 하나로 합쳐 주어야 하는데요, 이
				작업은 리덕스에서 제공하는 combineReducers라는 유틸 함수를 사용하여 쉽게
				처리할 수 있습니다.
				<img src={rredux13} alt="rredux13" className="chapter__imgs" />
			</p>
		</div>
	);
};

export default Chapter17;
