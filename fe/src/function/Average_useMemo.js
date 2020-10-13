import React, { useMemo, useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중 ...');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {setNumber(e.target.value)};
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }
  const avg = useMemo(() => getAverage(list), [list]);

  const onPress = (e) => {
		if (e.key === 'Enter') {
			onInsert();
		}
	};

  return (
    <div>
      <h1>콘솔 창에서 기존 average와의 차이를 볼 수 있습니다.</h1>
      <input value={number} onChange={onChange} onKeyPress={onPress}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> {avg}
      </div>
    </div>
    
  );
};

export default Average;