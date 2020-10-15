import React from 'react';
import { GoFile } from 'react-icons/go';
import todo0 from './imgs/chapter10/todo0.png';
import todo1 from './imgs/chapter10/todo1.png';
import todo2 from './imgs/chapter10/todo2.png';
import todo3 from './imgs/chapter10/todo3.png';
import todo4 from './imgs/chapter10/todo4.png';
import todo5 from './imgs/chapter10/todo5.png';
import todo6 from './imgs/chapter10/todo6.png';
import todo7 from './imgs/chapter10/todo7.png';
import todo8 from './imgs/chapter10/todo8.png';
import todo9 from './imgs/chapter10/todo9.png';
import todo10 from './imgs/chapter10/todo10.png';
import todo11 from './imgs/chapter10/todo11.png';
import todo12 from './imgs/chapter10/todo12.png';

const Chapter10 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">Chapter 10, todo-app 만들기</h1>
			<h2 className="toGit">
				<a href="https://github.com/junh0328/react-todoapp" target="_blank">
					<GoFile />
					완성된 todo-app 코드 보러 가기 (github)
				</a>
			</h2>
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
				위의 이미지는 추후 완성된 App.js의 컴포넌트 내용입니다. TodoTemplate이
				감싸고 있는 컴포넌트 TodoInsert, TodoList 가 바로 children으로 받게 될
				내용입니다.
			</p>

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
			<p>
				TodoListItem들은 TodoList에 들어갈 컴포넌트로써 현재는 우리가 텍스틀
				사전에 주어 작성하였지만, 후에는 props를 통해 클라이언트가 입력한 값을
				넘겨 받아 매핑하여 뿌려줄 것입니다. 그 컴포넌트들(TodoListItem)을
				TodoList에 담을 것입니다.
			</p>
			<h2 className="chapter__sub">10.2 기능 구현하기</h2>
			<h3 className="chapter__sub">10.2.1 App에서 todos 상태 사용하기</h3>
			<p>
				우리가 view단을 구성할 때, TodoListItem에서 "할 일" 을 text 클래스로
				묶어서 줬었습니다. 따라서 화면에 보여지기로는 할 일 / 할 일 / 할 일 로
				표현되었을 것입니다. 하지만, 나중에 추가할 일정 항목에 대한
				상태(state)는 모두 App 컴포넌트에서 관리합니다. App에서 useState를
				사용하여 todos라는 상태를 정의하고, todos를 TodoList의 props로 전달할
				것입니다.
				<img src={todo7} alt="todo7" className="chapter__imgs" />
				<img src={todo8} alt="todo8" className="chapter__imgs" />훅 함수인
				useState를 배열로 사용하여, 그 안에 '할 일'에 해당되는 객체를
				생성하였습니다. 각 객체는 json 형식을 이용하여 객체를 생성하였습니다.
				또한 객체를 구분하기 위해 id를 주었고{' '}
				<b>
					(구분하지 않으면 콘솔창에서 고유한 id가 필요하다는 오류 메세지를
					띄우고, 매핑 시에 index를 줘야하기 때문에 id를 주는 것이 좋습니다.)
				</b>
				, text는 실제로 표현될 할 일에 해당되고, checked는 토글 버튼을 통해
				체크가되면 지워지는 모습을 보여주기 위해 만들 키입니다. TodoList의
				props로 todos를 줌으로써, todoList props로 해당 키 값을 받아와
				TodoListItem에 뿌려줄 수 있습니다.
			</p>
			<p>
				<img src={todo9} alt="todo9" className="chapter__imgs" />
				props로 받아 온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로
				이루어진 배열로 변환하여 렌더링해 주었습니다.
			</p>
			<p>
				<img src={todo10} alt="todo10" className="chapter__imgs" />
				이제 TodoList 컴포넌트에서 받아 온 todo값에 따라 제대로 된 UI를 보여 줄
				수 있도록 컴포넌트를 수정하겠습니다. 또한 <b>classnames</b> 모듈을
				이용하여 조건부 스타일링을 줄 것입니다. 체크가 되어 있다면 MdCheckBox
				아이콘을 사용하여 우리가 만든 scss를 이용한 줄 그어진 모습을 보여줄
				것이고, 체크가 되어있지 않다면 MdCheckBoxOutline 아이콘을 통해 검은색
				체크박스를 보여줄 것입니다. 아이콘과 더불어 todos의 객체로 전달 받은
				'text'를 같이 보여줍니다. 뒤의 클래스인 remove 클래스는 후에 구성할
				것입니다.
			</p>
			<img src={todo0} alt="todo0" className="chapter__imgs" />
			<p>
				지금까지 작성한 코드를 통해 보여지는 뷰(view)단을 모두 구성했습니다!{' '}
				<br />
				되짚어 보자면, App.js에서 우리가 useState를 통해 만든 배열 [ ... ] 안에
				담긴 객체에 들어가는 키, 값을 props로 하여금 TodoList에서 매핑할 수 있게
				하였고, 그 매핑을 통해 풀어진 객체들이 TodoListItem에서 보여지게 됩니다.
				아직 onChange 기능과 onSubmit 기능을 만들지 않았기 때문에, TodoList에
				추가를 하지는 못하지만, 아이콘을 클릭하면 생기는 반응 들은 확인할 수
				있습니다.
			</p>
			<h3 className="chapter__sub">10.2.2 항목 추가 기능 구현하기</h3>
			<p>
				지금 까지의 내용은 useState를 통해 객체로 넘겨받은 todos를 TodoList에
				props로 전달 받은 뒤, 이를 TodoListItem에서 보여주는 기능을
				구현하였습니다. 앞으로는 TodoInsert컴포넌트에서 인풋 상태를 관리하고 App
				컴포넌트에는 todos 배열에 새로운 객체를 추가하는 함수를 만들어 주어야
				합니다.{' '}
				<b>먼저 들어가기 전에 어떤 함수를 써서 구현해야 할 지 생각해 보세요</b>
			</p>
			<h4 className="chapter__sub">10.2.2.1 TodoInsert value 상태 관리하기</h4>
			<p>
				TodoInsert 컴포넌트에서 인풋에 입력하는 값은 관리할 수 있도록 useState를
				사용하여 value라는 상태를 정의하겠습니다. 추가로 인풋에 넣어 줄 onChange
				함수도 작성해 주어야 하는데요. 이 과정에서 컴포넌트가 리렌더링될 때 마다
				함수를 새로 만드는 것이 아니라, 한 번 만들고 재사용할 수 있도록
				useCallback Hook을 사용하겠습니다.
			</p>
			<img src={todo11} alt="todo11" className="chapter__imgs" />
			<p>
				사실 인풋은 value 값과 onChange가 설정되지 않더라도 입력을 할 수는
				있습니다. 다만 리액트 컴포넌트 쪽에서 해당하는 인풋에 무엇이
				입력되었는지 추적하지 못할 뿐이죠. 이런 경우 현재 state가 잘
				업데이트되고 있는지 확인하려면, onChange 함수 안에서 콘솔 로그를
				찍어보는 방법이 있습니다.
			</p>
			<h4 className="chapter__sub">10.2.2.2 todos 배열에 새 객체 추가하기</h4>
			<p>
				이번에는{' '}
				<b>App 컴포넌트에서 todos 배열에 새 객체를 추가하는 onInsert 함수</b>를
				만들어 보겠습니다. 이 함수에서는 새로운 객체를 만들 때마다 id 값에 1씩
				더해 주어야 하는데요. id 값은 useRef를 사용하여 관리하겠습니다.{' '}
			</p>
			<p>
				여기서 useState가 아닌 useRef를 사용하여 컴포넌트에서 사용할 변수를
				만드는 이유는 무엇일까요?
			</p>
			<p>
				id값은 렌더링되는 정보가 아니기 때문입니다. 예를 들어 이 값은 화면에
				보이지도 않고, 이 값이 바뀐다고 해서 컴포넌트가 리렌더링될 필요도
				없습니다. 단순히 새로운 항목을 만들 때 참조되는 값일 뿐입니다.
			</p>
			<p>
				또한 onInsert 함수는 컴포넌트의 성능을 아낄 수 있도록 useCallback으로
				감싸 주겠습니다. 후에 onInsert 함수를 만든 뒤에 해당 함수를 TodoInsert
				컴포넌트의 props로 설정합니다.
			</p>
			<p>
				<img src={todo12} alt="todo12" className="chapter__imgs" />
				App.js에서 새로 추가되는 부분만을 코드에서 캡쳐해 왔습니다. todos 배열에
				새로운 객체를 추가해야 하므로, 기존 객체 3개 다음 값인 useRef를 (4)로
				주고 nextId 변수에 담았습니다.
			</p>
			<p>
				onInsert에서 첫번째 변수로 담기는 text는 todos 객체의 키인 text로,
				TodoListItem에서 children으로 받아져 화면 상에 보여지게 될 것입니다.
				또한 기존에 만든 todos 객체에서 4번째로 추가되기 때문에 설정했던
				nextId의 현재값(current)를 id로 주었고, 기본적으로 새로 추가한 객체이기
				때문에 checked는 false를 주었습니다. 또한 useState문의 todos 값을
				설정하는 SetTodos를 만나, todos 객체에 우리가 insert 시킨 todo를
				concat(이어 붙일 것)합니다. 후에 nextId는 1을 추가시킵니다. 밑에 배열에
				담긴 [todos]는 우리가 배운 Hooks들 중 useEffect와 관계가 있습니다.
				오로지 [todos] 객체에만 반응하는 onInsert를 만들기 위함입니다.
			</p>
		</div>
	);
};

export default Chapter10;
