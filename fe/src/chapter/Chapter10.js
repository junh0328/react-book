import React from 'react';
import todo1 from './imgs/chapter10/todo1.png';
import todo2 from './imgs/chapter10/todo2.png';
import todo3 from './imgs/chapter10/todo3.png';
import todo4 from './imgs/chapter10/todo4.png';
import todo5 from './imgs/chapter10/todo5.png';
import todo6 from './imgs/chapter10/todo6.png';

const Chapter10 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter 10, todo-app 만들기</h1>
			<h2 className="chapter__sub">10.1 UI 구현하기</h2>
			<p>앞으로 만들 컴포넌트를 하나하나 용도별로 소개하겠습니다</p>
			<ul>
				<li>
					<b>1. TodoTemplate</b>: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정
					관리)을 보여 줍니다. children으로 내부 JSX를 props로 받아 와서
					렌더링해 줍니다.
				</li>
				<li>
					<b>2. TodoInsert</b>: 새로운 항목을 입력하고 추가할 수 있는
					컴포넌트입니다. state를 통해 인풋의 상태를 관리합니다.
				</li>
				<li>
					<b>3. TodoListItem</b>: 각 할 일 항목에 대한 정보를 보여 주는
					컴포넌트입니다. todo 객체를 props로 받아 와서 상태에 따라 다른
					스타일의 UI를 보여 줍니다.
				</li>
				<li>
					<b>4. TodoList</b>: todos 배열을 props로 받아 온 후, 이를 배열 내장
					함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여
					줍니다.
				</li>
			</ul>
			<img src={todo1} alt="todo1" className="chapter__imgs_w100" />
			<h3 className="chapter__sub">10.1.1 TodoTemplate 만들기</h3>
			<img src={todo2} alt="todo2" className="chapter__imgs" />
			<p>
				content 클래스에 속한 내용은 JSX의 props로 children을 받게 됩니다.
				컴포넌트 사이에 둘러 쌓인 값을 사용한다고 보면 됩니다.
				<img src={todo3} alt="todo3" className="chapter__imgs" />
			</p>
			위의 이미지는 추후 완성된 App.js의 컴포넌트 내용입니다. TodoTemplate이
			감싸고 있는 컴포넌트 TodoInsert, TodoList 가 바로 children으로 받게 될
			내용입니다.
			<h3 className="chapter__sub">10.1.2 TodoInsert 만들기</h3>
			<img src={todo4} alt="todo4" className="chapter__imgs" />
			<p>
				react-icons라는 모듈을 이용하여 리액트에서 무료로 제공하는 아이콘들을
				사용할 수 있습니다. 초기에는 기능 구현대신 보여지는 뷰(view)단을 먼저
				구성합니다. 위의 방식처러 초기에 구성을 하면 글씨를 쓸 수도, 작성한 글을
				TodoList에 넣을 수도 없습니다. 따라서 후에 onChange 메소드를 통해 변화를
				감지(우리가 글을 작성하는 것을 감지)하고, onSubmit 메소드를 통해 우리가
				작성한 글을 TodoList 컴포넌트로 보내주게 됩니다.
			</p>
			<h3 className="chpater__sub">10.1.3 TodoListItem과 TodoList 만들기</h3>
			<img src={todo5} alt="todo5" className="chapter__imgs" />
			<img src={todo6} alt="todo6" className="chapter__imgs" />
		</div>
	);
};

export default Chapter10;
