import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className="wrap">
			<div className="intro">
				<h1>홈</h1>
				<p>안녕하세요. 홈페이지에 오신 걸 환영합니다.</p>
				<p>
					이 블로그는 '리액트를 다루는 기술'과 '비전공자를 위한 이해할 수 있는
					IT 지식' 책을 참고하여 작성하고 있습니다.
				</p>
			</div>
			<div className="image__wrap">
				<img
					className="image__left"
					src="https://avatars1.githubusercontent.com/u/54658162?s=460&u=e53c684a07e354391a0cdb0380eba704f74bbbef&v=4"
					alt="myimage"
				></img>
				<p className="image__right">
					<a href="https://github.com/junh0328?tab=repositories">
						깃허브로 바로가기
					</a>
				</p>
			</div>
			<div className="image__wrap">
				<img
					className="image__left"
					src="https://junh0328.github.io/portfolio/imgs/my_image.jpg"
					alt="myimage"
				></img>
				<p className="image__right">
					<a href="https://junh0328.github.io/portfolio/">
						포트폴리오로 바로가기
					</a>
				</p>
			</div>
		</div>
	);
}

export default Home;
