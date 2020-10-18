import React from 'react';
import opt01 from './imgs/chapter11/opt01.png';
import opt02 from './imgs/chapter11/opt02.png';
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
		</div>
	);
};

export default Chapter11;
