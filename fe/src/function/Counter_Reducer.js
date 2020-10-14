import React, { useReducer } from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { value: state.value + 1 };
		case 'DECREMENT':
			return { value: state.value - 1 };
		default:
			return state;
	}
}

const Counter_Reducer = () => {
	const [state, dispatch] = useReducer(reducer, { value: 0 });

	return (
		<div className="wrap">
			<h1> useReducer를 이용한 Count 활용입니다.</h1>
			<p>
				현재 카운터 값은 <b>{state.value}</b> 입니다.
			</p>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>1 더하기</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>1 빼기</button>
		</div>
	);
};

export default Counter_Reducer;
