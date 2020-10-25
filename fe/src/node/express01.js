import React from 'react';
import express1 from './imgs/chapter1/express01.png';
import express2 from './imgs/chapter1/express02.png';
import express3 from './imgs/chapter1/express03.png';

const express01 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">DB 연동을 위한 초기 설정</h1>
			<h2 className="chapter__sub">1.1 express-generator 사용하기</h2>
			<p>
				익스페르 프레임워크는 익스프레스 외에도 많은 패키지를 사용하므로 입문자
				입장에서는 필요한 패키지를 찾아서 설치하기 조금 어렵습니다. 다행히
				프레임워크에 필요한 package.json을 만들어주고 기본 폴더 구조까지
				잡아주는 패키지가 있습니다. 바로 <b>Express-generator</b>입니다.
				<img src={express1} alt="express01" className="chapter__imgs" />
				'npm install -g express-generator' 명령어를 사용하며 express-generator를
				설치합니다.
			</p>

			<p>
				설치가 완료되면 express 명령어를 통해 프로젝트를 생성합니다. 명령어는
				다음과 같습니다.
			</p>
			<img src={express2} alt="express02" className="chapter__imgs" />
			<p>
				명령어를 통해 생성된 폴더 구조를 간단히 살펴보면 다음과 같습니다. app.js
				파일이 핵심적인 서버 역할을 합니다. 나중에 데이터베이스를 배우면 데이터
				부분은 models 폴더를 만들어 그 안에 작성하면 됩니다. 이렇게 구조가
				명확하게 구분되어 있어 서버를 관리하기 용이합니다. MVC(모델-뷰-컨트롤러)
				패턴과도 비슷합니다. 라우터를 컨트롤러로 본다면 말이죠
				<img src={express3} alt="express03" className="chapter__imgs_40" />
			</p>
			<ul>
				<li>- bin 폴더의 www 파일은 서버를 실행하는 스크립트입니다.</li>
				<li>
					- public 폴더는 외부에서 접근 가능한 파일들을 모아둔 곳입니다. 이미지,
					자바스크립트, CSS 파일들이 들어 있습니다.
				</li>
				<li>
					- routes 폴더는 주소별 라우터들을 모아둔 곳이고, views 폴더는 템플릿
					파일을 모아둔 곳입니다. 앞으로 서버의 로직은 모두 routes 폴더 안의
					파일에 작성할 것입니다.
				</li>
				<li>- views 폴더 안에는 화면에 보이는 부분을 작성할 것입니다. </li>
			</ul>
		</div>
	);
};

export default express01;
