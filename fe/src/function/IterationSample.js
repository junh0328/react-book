import React, { useState } from 'react';

const IterationSample = () => {
	const style = {
		cursor: 'pointer',
	};

	const [names, setNames] = useState([
		// 데이터 배열
		{ id: 1, text: '눈사람' },
		{ id: 2, text: '얼음' },
		{ id: 3, text: '눈' },
		{ id: 4, text: '바람' },
	]);
	const [inputText, setInputText] = useState(''); // input의 초기값을 설정할 상태
	const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

	const onChange = (e) => setInputText(e.target.value);

	const onClick = () => {
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		});
		setNextId(nextId + 1); // nextId 값에 1을 더해준다.
		setNames(nextNames); // names 값을 업데이트한다.
		setInputText(''); // inputText를 초기화한다.
	};

	const onPress = (e) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	const onMouseOver = () => {
		alert('더블 클릭시 해당 내용이 삭제됩니다.');
	};

	const onRemove = (id) => {
		const nextNames = names.filter((name) => name.id !== id);
		setNames(nextNames);
	};

	const nameList = names.map((name) => (
		<li
			key={name.id}
			style={style}
			onMouseOver={onMouseOver}
			onDoubleClick={() => onRemove(name.id)}
		>
			{name.text}
		</li>
	));

	return (
		<div className="wrap">
			<input value={inputText} onChange={onChange} onKeyPress={onPress} />
			<button onClick={onClick}>추가</button>
			<ul>{nameList}</ul>
		</div>
	);
};

export default IterationSample;
