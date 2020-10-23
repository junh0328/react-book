import React from 'react';
import immer1 from './imgs/chapter12/immer1.png';
import immer2 from './imgs/chapter12/immer2.png';
import immer3 from './imgs/chapter12/immer3.png';

const Chapter12 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">
				Chapter12, immer를 사용하여 더 쉽게 불변성 유지하기
			</h1>
			<p>
				11장에서는 컴포넌트 업데이트 성능을 어떻게 최적화해야 하는지, 불변성을
				유지하면서 상태를 업데이트하는 것이 왜 중요한지 배웠습니다. 전개
				연산자와 배열의 내장 함수를 사용하면 간단하게 배열 혹은 객체를 복사하고
				새로운 값을 덮어 쓸 수 있죠. 하지만 객체의 구조가 엄청나게 깊어지면
				불변성을 유지하면서 이를 업데이트하는 것이 매우 힘듭니다. 이러한
				상황에서 immer 라이브러리를 사용하면, 구조가 복잡한 객체도 매우 쉽고
				짧은 코드를 사용하여 불변성을 유지하면서 업데이트해 줄 수 있습니다.
			</p>
			<ul className="ul__box">
				<li className="li__box"> - immer를 설치하고, 사용법 알아보기</li>
				<li className="li__box">
					{' '}
					- immer를 사용하여 간단한 프로젝트 만들어 보기
				</li>
			</ul>
			<h2 className="chapter__sub">12.1 immer를 설치하고 사용법 알아보기</h2>
			<h3 className="chapter__sub">12.1.1 immer를 사용하지 않고 불변성 유지</h3>
			<img src={immer1} alt="immer1" className="chapter__imgs"></img>
			<img src={immer2} alt="immer1" className="chapter__imgs"></img>
			<img src={immer3} alt="immer1" className="chapter__imgs"></img>
			<p>
				폼에서 아이디/이름을 입력하ㅕㄴ 하단 리스트에 추가되고, 리스트 항목을
				클릭하면 삭제되는 간단한 컴포넌트를 만들었습니다. 이렇게 전개 연산자와
				배열 내장 함수를 사용하여 불변성을 유지하는 것은 어렵지 않지만, 상태가
				복잡해진다면 조금 귀찮은 작업이 될 수도 있습니다.
			</p>
			<h3 className="chapter__sub">12.1.2 immer 사용법</h3>
			<p>
				immer를 사용하면 불변성을 유지하는 작업을 매우 간단하게 처리할 수
				있습니다.
			</p>
		</div>
	);
};

export default Chapter12;
