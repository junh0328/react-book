import React from 'react';
import './Home.css';
// import ScrollBox from './ScrollBox';

function Home() {
	return (
		<div className="wrap">
			<h1>홈</h1>
			<p>안녕하세요. 홈페이지에 오신 걸 환영합니다.</p>
			{/* <div>
				<ScrollBox ref={(ref) => (this.scrollBox = ref)} />
				<button onClick={() => this.scrollBox.scrollToBottom()}>
					맨 밑으로
				</button>
			</div> */}
		</div>
	);
}

export default Home;
