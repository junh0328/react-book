import React, { useState } from 'react';
import Info from './Info';

const HookHome = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="wrap">
			<h1 className="chapter__main">Hooks을 다뤄볼 기본 페이지입니다.</h1>

			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				{visible ? '숨기기 ' : '보이기'}
			</button>
			<Info />
		</div>
	);
};

export default HookHome;
