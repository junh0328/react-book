import React from 'react';
import './Chapter.css';
import css1 from './imgs/chapter9/css1.png';
import css2 from './imgs/chapter9/css2.png';
import css3 from './imgs/chapter9/css3.png';
import css4 from './imgs/chapter9/css4.png';

const Chapter9 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter 9, 컴포넌트 스타일링</h1>
			<p className="chapter__contents">
				리액트에서 컴포넌트를 스타일링할 때는 다양한 방식을 사용할 수 있습니다.
				여러 방식 중에서 딱히 정해진 방식이란 없기 때문입니다. 회사마다 요구하는
				스펙이 다르고, 개발자마다 각자 취향에 따라 선택하기 때문입니다. 이
				장에서는 어떠한 방식이 있는지 알아보고, 자주 사용하는 방식을 하나하나
				사용해 보겠습니다.
			</p>
			<ul className="chapter__ul">
				<li className="chapter__li">
					이 장에서 알아볼 스타일링 방식은 다음과 같습니다.
				</li>
				<li className="chapter__li">
					- 일반 CSS: 컴포넌트를 스타일링하는 가장 기본적인 방식입니다.
				</li>
				<li className="chapter__li">
					- Sass: 자주 사용되는 CSS 전처리(pre-processor)중 하나로 확장된 CSS
					문법을 사용하여 CSS 코드를 더욱 쉽게 작성할 수 있도록 해 줍니다.
				</li>
				<li className="chapter__li">
					- CSS Module: 스타일을 작성할 때 CSS 클래스가 다른 CSS 클래스의 이름과
					절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해 주는
					옵션입니다.
				</li>
				<li className="chapter__li">
					- styled-components: 스타일을 자바스크립트 파일에 내장시키는 방식으로
					스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게
					해줍니다.
				</li>
			</ul>
			<h2 className="chapter__sub">9.1 Sass 사용하기</h2>
			<p className="chapter__contents">
				Sass(Syntactically Awesome style sheeys)(문법적으로 매우 멋진
				스타일시트)는 CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해 주고,
				스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서 유지
				보수를 더욱 쉽게 해 줍니다.
			</p>
			<p className="chapter__contents">
				create-react-app 구버전에서는 Sass를 사용하려면 추가 작업이 필요했는데,
				v2 버전부터는 별도의 추가 설정 없이 바로 사용할 수 있습니다. Sass에서는
				두 가지 확장자 .scss와 .sass를 지원합니다. Sass가 처음 나왔을 때는 .sass
				확장자만 지원되었으나 나중에 개발자들의 요청에 의해 .scss 확장자도
				지원하게 되었습니다.
			</p>
			<ul>
				<li>
					<b>아래의 이미지는 .sass 표기법의 예시입니다.</b>
					<img src={css1} alt="css1" className="chapter__imgs_w40" />
				</li>
				<li>
					<b>아래의 이미지는 .scss 표기법의 예시입니다.</b>
					<img src={css2} alt="css2" className="chapter__imgs_w40" />
				</li>
			</ul>
			<p className="chapter__contents">
				주요 차이점을 살펴보면, .sass 확장자는 중괄호와 세미콜론을 사용하지
				않습니다. 반면 .scss확장자는 기존 CSS를 작성하는 방식과 비교해서 문법이
				크게 다르지 않습니다. 보통 .scss 문법이 더 자주 사용됩니다.
			</p>
			<h2 className="chapter__sub">9.2 CSS-Module 사용하기</h2>
			<p className="chapter__contents">
				CSS Module은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, 즉 [파일
				이름]_[클래스 이름]_[해시값] 형태로 자동으로 만들어서 컴포넌트 스타일
				클래스 이름이 중첩되는 현상을 방지해 주는 기술입니다. CSS Module을
				사용하기 위해 구버전의 create-react-app 에서는 웹팩에서 css-loader
				설정을 별도로 해 주어야 했지만, v2 버전 이상부터는 따로 설정할 필요 없이
				.module.css 확장자로 파일을 저장하기만 하면 CSS Module이 적용됩니다.
				<img src={css3} alt="css3" className="chapter__imgs" />
				CSS Module을 사용하면 클래스 이름을 지을 때 그 고유성에 대해 고민하지
				않아도 됩니다. 흔히 사용하는 단어로 이름을 짓는다고 해도 전혀 문제가
				되지 않습니다. 해당 클래스는 우리가 방금 만든 스타일을 직접 불러온
				컴포넌트 내부에서만 작동하기 때문입니다. 만약 특정 클래스가 웹
				페이지에서 전역적으로 사용되는 경우라면 :global을 앞에 입력하여 글로벌
				CSS임을 명시해 줄 수 있습니다.
				<img src={css4} alt="css4" className="chapter__imgs" />
				CSS Module이 적용된 스타일 파일을 불러오면 객체를 하나 전달받게 되는데
				CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 키-값 형태로
				들어 있습니다. 예를 들어 위 코드에서 console.log(styles)를 한다면 다음과
				같은 결과가 나타납니다.
			</p>
			<p>wrapper: "CSSModule_wrapper_15bdQ"</p>
			<p className="chapter__contents">
				우리가 지정한 클래스 이름 앞뒤로 파일 이름과 해시값이 붙었습니다.
			</p>
		</div>
	);
};

export default Chapter9;
