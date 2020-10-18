import React from 'react';
import opt01 from './imgs/chapter11/opt01.png';
import opt02 from './imgs/chapter11/opt02.png';
import opt03 from './imgs/chapter11/opt03.png';
import opt04 from './imgs/chapter11/opt04.png';
import opt05 from './imgs/chapter11/opt05.png';
import opt06 from './imgs/chapter11/opt06.png';
import opt07 from './imgs/chapter11/opt07.png';
const Chapter11 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter 11, 컴포넌트 성능 최적화</h1>
			<p>
				10장에서 우리가 만든 todo-app은 추가되어 있는 데이터가 매우 적기 때문에,
				이 애플리케이션을 사용할 때 불편하지 않습니다. 하지만 데이터가 무수히
				많아지면, 애플리케이션이 느려지는 것을 체감할 수 있을 정도로 지연이
				발생합니다. 따라서 이번 장에서는 다음과 같은 흐름으로 진행해 보겠습니다.
			</p>
			<ul className="ul__box">
				<li className="li__box">많은 데이터 렌더링하기</li>
				<li className="li__box">크롬 개발자 도구를 통한 성능 모니터링</li>
				<li className="li__box">
					React.memo를 통한 컴포넌트 리렌더링 성능 최적화
				</li>
				<li className="li__box">
					onToggle과 onRemove가 새로워지는 현상 방지하기
				</li>
				<li className="li__box">react-virtualized를 사용한 렌더링 최적화</li>
			</ul>
			<h2 className="chpater__sub">11.1 많은 데이터 렌더링하기</h2>
			<p>
				우선 실제로 랙을 경험할 수 있도록 기존에 작성했던, todo-app을 사용하여
				많은 데이터를 렌더링할 것입니다. 직접 데이터를 넣을 수 없기 때문에
				배열을 통해 객체를 푸쉬하였습니다.
				<img src={opt01} alt="opt01" className="chapter__imgs" />
				여기서 주의할 점은 useState의 기본값에 함수를 넣어 주었다는 것입니다.
				여기서{' '}
				<b>
					useState(createBulkTodos())라고 작성하면 리렌더링될 때마다
					createBulkTodos 함수가 호출되지만, useState(createBulkTodos)처럼
					파라미터를 함수 형태로 넣어 주면 컴포넌트가 처음 렌더링될 때만
					createBulkTodos 함수가 실행될 것입니다.
				</b>
			</p>
			<h2 className="chapter__sub">
				11.2 크롬 개발자 도구를 통한 성능 모니터링
			</h2>
			<p>
				성능을 분석해야 할 때는 느려졌다는 느낌만으로 충분하지 않습니다. 정확히
				몇 초가 걸리는지 확인해야 하는데, 크롬 개발자 도구의 Performance 탭을
				사용하여 측정할 수 있습니다. 크롬 개발자 도구의 Performance 탭을 누르면
				녹화버튼이 나옵니다. 녹화버튼을 누른 후에, '할 일' 버튼 들 중 하나를
				선택한 후 변화가 반영되면 stop 버튼을 누릅니다. 후에 확인하면 다음과
				같은 결과를 볼 수 있습니다.
				<img src={opt02} alt="opt2" className="chapter__imgs_w100" />
				성능 분석 결과에 나타난 Timings를 열어 보면 각 시간대에 컴포넌트의 어떤
				작업이 처리되었는 지 확인할 수 있습니다. 캡쳐 본은 동작하지 않지만
				실제로 결과를 보면 이 작업을 처리하는데 1.02초가 걸렸다고 나타났습니다.
				데이터가 2500개밖에 안 되는데도 불구하고 1.02초나 걸린다는 것은 성능이
				매우 나쁘다는 의미입니다. 이제 이를 최적화하는 방법을 알아보겠습니다.
			</p>
			<h2 className="chapter__sub">11.3 느려지는 원인 분석</h2>
			<p>컴포넌트는 다음과 같은 상황에서 리렌더링이 발생합니다.</p>
			<ul>
				<li>1. 자신이 전달받은 props가 변경될 때</li>
				<li>2. 자신의 state가 바뀔 떼</li>
				<li>3. 부모 컴포넌트가 리렌더링될 떄</li>
				<li>4. forceUpdate 함수가 실행될 때</li>
			</ul>
			<p>
				지금 상황을 분석해 보면, '할 일 1' 항목을 체크할 경우 App 컴포넌트의
				state가 변경되면서 App 컴포넌트가 리렌더링됩니다. 부모 컴포넌트가
				리렌더링되었으니 TodoList 컴포넌트가 리렌더링되고 그 안의 무수한
				컴포넌트들도 리렌더링됩니다.
				<br />
				<b>
					'할 일 1' 항목은 리렌더링되어야 하는 것이 맞지만, '할 일 2'부터 '할 일
					2500'까지는 리렌더링을 안 해도 되는 상황인데 모두 리렌더링되고
					있으므로 이렇게 느려진 것입니다.
				</b>{' '}
				이럴 때는 컴포넌트 리렌더링 성능을 최적화해 주는 작업을 해 주어야
				합니다. 즉 리 렌더링이 불필요할 때는 리렌더링을 방지해 주어야 하는데,
				어떻게 방지하는지 알아봅시다.
			</p>
			<h2 className="chapter__sub">
				11.4 React.memo를 사용하여 컴포넌트 성능 최적화
			</h2>
			<p>
				컴포넌트의 리렌더링을 방지할 때는 7장에서 배운 shouldComponentUpdate라는
				라이프사이클을 사용하면 됩니다. 그런데 함수형 컴포넌트에서는
				라이프사이클 메서드를 사용할 수 없습니다. 그 대신 <b>React.memo</b>라는
				함수를 사용합니다. 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지
				않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화해 줄 수
				있습니다.
			</p>
			<p>
				React.memo의 사용법은 매우 간단합니다. 컴포넌트를 만들고 나서 감싸
				주기만 하면 됩니다. TodoListItem 컴포넌트에 다음과 같이 React.memo를
				적용해 보겠습니다.
			</p>
			<img src={opt03} alt="opt03" className="chapter__imgs" />
			<p>
				이제 TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면
				리렌더링을 하지 않습니다.
			</p>
			<h2 className="chapter__sub">
				11.5 onToogle, onRemove 함수가 바뀌지 않게 하기
			</h2>
			<p>
				React.memo를 사용하는 것만으로 컴포넌트 최적화가 끝나지는 않습니다. 현재
				프로젝트에서는 todos 배열이 업데이트되면 onRemove와 onToggle 함수도
				새롭게 바뀌기 때문입니다. onRemove와 onToggle 함수는 배열 상태를
				업데이트하는 과정에서 최신 상태의 todos를 참조하기 때문에 todos 배열이
				바뀔 때마다 함수가 새로 만들어집니다. 이렇게{' '}
				<b>함수가 계속 만들어지는 상황을 방지하는 방법</b>은 두 가지입니다.{' '}
				<b>
					첫 번째 방법은 useState의 함수형 업데이트 기능을 사용하는 것이고, 두
					번째 방법은 useReducer를 사용하는 것입니다.
				</b>
			</p>
			<h3 className="chapter__sub">11.5.1 useState의 함수형 업데이트</h3>
			<p>
				기존에 setTodos 함수를 사용할 때는 새로운 상태를 파라미터로 넣어
				주었습니다. setTodos를 사용할 때{' '}
				<b>
					새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의
				</b>
				해 주는 업데이트 함수를 넣을 수도 있습니다. 이를 <b>함수형 업데이트</b>
				라고 합니다.
				<img src={opt04} alt="opt04" className="chapter__imgs" />
				SetNumber(number + 1)을 하는 것이 아니라, 위 코드처럼 어떻게
				업데이트할지 정의해 주는 업데이트 함수를 넣어 줍니다. 그러면
				useCallback을 사용할 때 두 번째 파라미터로 넣는 배열에 number를 넣지
				않아도 됩니다.
				<img src={opt05} alt="opt05" className="chapter__imgs" />
				위 코드를 보면 알 수 있듯이 useState에서 첫 번째 파라미터에 들어오는
				변수의 값을 세팅해주는 두 번째 파라미터 세터함수를 사용할 때, 화살표
				함수를 넣어주면 됩니다.
				<img src={opt06} alt="opt06" className="chapter__imgs" />
				<img src={opt07} alt="opt07" className="chapter__imgs" />
				useReducer를 사용할 때는 원래 두 번째 파라미터에 초기 상태를 넣어 주어야
				합니다. 지금은 그 대신 두 번째 파라미터에 undefined를 넣고, 세 번째
				파라미터에 초기 상태를 만들어 주는 함수인 createBulkTodos를 넣어
				주었는데요, 이렇게 하면 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos
				함수가 호출됩니다. useReducer를 사용하는 방법은 기존 코드를 많이 고쳐야
				한다는 단점이 있지만, 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에
				둘 수 있다는 장점이 있습니다. 성능상으로는 두 가지 방법이 비슷하기
				때문에 어떤 방법을 선택할지는 여러분의 취향에 따라 결정하면 됩니다.
			</p>
		</div>
	);
};

export default Chapter11;
