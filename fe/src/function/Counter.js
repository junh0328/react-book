import React, { useState } from 'react';

const Counter = () => {
	const [value, setValue] = useState(0);

	const style = {
		marginRight: '3px',
	};

	const onClickedDoublePlus = () => {
		setValue(value * 2 + 1);
	};

	return (
		<div className="wrap">
			<p>
				현재 카운트 값은 <b>{value}</b>입니다.
			</p>
			<button style={style} onClick={() => setValue((value) => value + 1)}>
				1 더하기
			</button>
			<button style={style} onClick={() => setValue((value) => value - 1)}>
				1 빼기
			</button>
			<button style={style} onClick={() => setValue((value) => value * 2)}>
				2 곱하기
			</button>
			<button style={style} onClick={() => setValue((value) => value * 2 + 1)}>
				2 곱하고 1 더하기
			</button>

			<button style={style} onClick={onClickedDoublePlus}>
				{' '}
				2 곱하고 1 더하기
			</button>
		</div>
	);
};

export default Counter;
