import React from 'react';
import immer1 from './imgs/chapter12/immer1.png';
import immer2 from './imgs/chapter12/immer2.png';
import immer3 from './imgs/chapter12/immer3.png';
import immer4 from './imgs/chapter12/immer4.png';
import immer5 from './imgs/chapter12/immer5.png';
import immer6 from './imgs/chapter12/immer6.png';
import immer7 from './imgs/chapter12/immer7.png';

const Chapter12 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">
				Chapter 12, immer를 사용하여 더 쉽게 불변성 유지하기
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
			<img src={immer2} alt="immer2" className="chapter__imgs"></img>
			<img src={immer3} alt="immer3" className="chapter__imgs"></img>
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
			<img src={immer4} alt="immer4" className="chapter__imgs" />
			<p>
				produce라는 함수는 두 가지 파라미터를 받습니다. 첫 번째 파라미터는
				수정하고 싶은 상태이고, 두 번째 파라미터는 상태를 어떻게 업데이트할지
				정의하는 함수입니다.
			</p>
			<p>
				두 번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce
				함수가 불변성을 유지를 대신해 주면서 새로운 상태를 생성해 줍니다. 이
				라이브러리의 핵심은{' '}
				<b>
					'불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로
					해주는 것'
				</b>
				입니다. 단순히 깊은 곳에 위치하는 값을 바꾸는 것 외에 배열을 처리할 때도
				매우 쉽고 편합니다.
			</p>
			<h3 className="chapter__sub">
				12.1.3 Immer 컴포넌트에 immer 라이브러리 적용하기
			</h3>
			<img src={immer5} alt="immer5" className="chapter__imgs"></img>
			<img src={immer6} alt="immer6" className="chapter__imgs"></img>
			<img src={immer7} alt="immer7" className="chapter__imgs"></img>
			<p>
				immer를 사용하여 컴포넌트 상태를 작성할 때는 객체 안에 있는 값을 직접
				수정하거나, 배열에 직접적인 변화를 일으키는 push, splice 등의 함수를
				사용해도 무방합니다. 하지만 immer를 사용한다고 해서 무조건 코드가
				간결해지는 것은 아닙니다. onRemove의 경우에는 배열 내장 함수 filter를
				사용하는 것이 코드가 더 깔끔하므로, 굳이 immer를 적용할 필요가 없습니다.
				immer는 불변성을 유지하는 코드가 복잡할 때만 사용해도 충분합니다.
			</p>
		</div>
	);
};

export default Chapter12;
