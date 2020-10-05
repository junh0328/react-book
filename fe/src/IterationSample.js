import React from 'react';

const IterationSample = () => {
	const names = ['눈', '비', '안개', '바람'];
	const nameList = names.map((name, index) => <li key={index}>{name}</li>);

	return (
		<div>
			<ul>{nameList}</ul>
		</div>
	);
};

export default IterationSample;
