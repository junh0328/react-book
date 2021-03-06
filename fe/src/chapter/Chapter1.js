import React from 'react';
import './Chapter.css';
import JSX1 from './imgs/JSX1.png';

function Chapter1() {
	return (
		<div className="wrap">
			<div className="section">
				<h1 className="chapter__main">chapter 1</h1>
				<h2 className="chapter__sub">1.1 왜 리액트인가?</h2>
				<p className="chapter__contenrs">
					최근 몇 년간 전 세계 개발자는 자바스크립트에 뜨겁게 열광하고 있습니다.
					한때 자바스크립트는 웹 브라우저에서 간단한 연산을 하거나 시각적인
					효과를 주는 단순한 스크립트 언어에 불과했지만, 현재는 웹
					어플리케이션에서 가장 핵심적인 역할을 합니다. 더 나아가 영역을
					확장하여 서버 사이드는 물론 모바일, 데스크톱 애플리케이션에서도
					엄처나게 활약합니다.
				</p>
				<p className="chapter__contents">
					이제는 자바스크립트만으로도 규모가 큰 애플리케이션을 만들 수 있는
					시대가 왔습니다. 대규모 애플리케이션 중 프런트엔드 사이드에서 돌아가는
					애플리케이션 구조를 관리하려면 어떻게 해야 할까요? 솔직히 이런
					애플리케이션을 특별한 도구 없이 순수하게 자바스크립트로만 관리하려면
					골치 아프겠죠? 지금까지 수많은 프레임워크가 조금씩 다른 관점에서 이를
					해결하려고 노력해 왔습니다.
				</p>
				<p className="chapter__contents">
					이 프레임워크들은 주로 MVC(model-view-controller) 아키텍처,
					MVVM(model-view-view model)아키텍처를 사용합니다. MVC, MVVM, MVW 등과
					같은 여러 구조가 지닌 공통점은 모델과 뷰가 있다는 것인데요, 모델은
					애플리케이션에서 사용하는 데이터를 관리하는 영역이고, 뷰는 사용자에게
					보이는 부분입니다. 프록램이 사용자에게서 어떤 작업(예: 버튼 클릭,
					텍스트 입력 등)을 받으면 컨트롤러는 모델 데이터를 조회하거나 수정하고,
					변경된 사항을 뷰에 반영합니다.
				</p>
				<p className="chpater__contents">
					<img src={JSX1} alt="JSX1" className="chapter__imgs_w40" />
					예를 들어 JSON 파일의 객체중 likes 라는 객체의 값이 1 증가 시키고 싶을
					때, likes 요소를 찾아 내부를 수정해야겠지요? 업데이트하는 항목에 따라
					어떤 부분을 찾아서 변경할지 규칙을 정하는 작업은 간단하지만,
					애플리케이션 규모가 크면 상당히 복잡해지고 제대로 관리하지 않으면
					성능도 떨어질 수 있습니다. 페이스북 개발 팀은 이를 해결하려고 하나의
					아이디어를 고안해 냈는데, 어떤 데이터가 변할 때마다 어떤 변화를 줄지
					고민하는 것이 아니라 그냥 기존 뷰를 날려 버리고 처음부터 새로
					렌더링하는 방식입니다.
				</p>
				<p className="chpater__contents">
					하지만, 이것이 과연 가능할까요? 웹 브라우저에서 이 방식대로 하면 CPU
					점유율도 크게 증가할텐데요. DOM은 느리니까요. 페이스북 개발팀이 앞서
					설명한 방식으로 최대한 성능을 아끼고 편안한 사용자 경험을 제공하면서
					구현하고자 개발한 것이 바로{' '}
					<b className="under_line">리액트(react)</b>
					입니다.
				</p>
			</div>
			<div className="section">
				<h2 className="chapter__sub">1.1.1 리액트의 이해</h2>
				<p className="chpater__contents">
					리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는데
					사용합니다. 구조가 MVC, MVW 등인 프레임워크와 달리, 오직 V(View)에만
					신경 쓰는 라이브러리입니다. 리액트 프로젝트에서 특정 부분이 어떻게
					생길지 정하는 선언체가 있는데, 이를
					<b className="under_line"> 컴포넌트</b>라고 합니다. 컴포넌트는 다른
					프레임워크에서 사용자 인터페이스를 다룰 때 사용하는 템플릿과는 다른
					개념입니다. 템플릿은 보통 데이터셋이 주어지면 HTML 태그 형식을
					문자열로 반환하는데,{' '}
					<span className="bright">
						이와 달리 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장하고
						있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을
						정의합니다.
					</span>
				</p>
				<p className="chpater__contents">
					사용자 화면에 뷰를 보여 주는 것을 <b>렌더링</b>이라고 합니다. 리액트
					라이브러리는 뷰를 어떻게 렌더링하길래 데이터가 변할 때마다 새롭게
					리렌더링하면서 성능을 아끼고, 최적의 사용자 경험을 제공할 수 있을까요?
					이 비밀을 파악하려면 리액트 컴포넌트가 최초로 실행한{' '}
					<b>'초기 렌더링'</b>과 컴포넌트의 데이터 변경으로 다시 실행되는{' '}
					<b>'리렌더링'</b> 개념을 이해해야 합니다.
				</p>
			</div>
			<div className="section">
				<h2 className="chapter__sub">1.1.1.1 초기 렌더링</h2>
				<p className="chpater__contents">
					어떤 UI 관련 프레임워크, 라이브러리를 사용하는지 간에 맨 처음 어떻게
					보일지를 정하는 초기 렌더링이 필요합니다. 리액트 에서는 이를 다루는
					render() 함수가 있습니다. 이 함수는 컴포넌트가 어떻게 생겼는지
					정의하는 역할을 합니다. 이 함수는 html 형식의 문자열을 반환하지 않고,
					뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체를
					반환합니다. 이렇게 컴포넌트의 렌더링 작업이 끝나면 지니고 있는
					정보들을 사용하여 HTML, 마크업을 만들고, 이를 우리가 정하는 실제
					페이지의 DOM 요소 안에 주입합니다.
				</p>
				<p className="chpater__contents">
					컴포넌트를 실제 페이지에 렌더링할 때는 분리된 두 가지 절차를 따릅니다.
				</p>
				<ul className="chapter__ul">
					<li className="chapter__li">문자열 형태의 HTML 코드를 생성합니다.</li>
					<li className="chapter__li">
						특정 DOM에 해당 내용을 주입하면 이벤트가 적용됩니다.
					</li>
				</ul>
			</div>
			<div className="section">
				<h2 className="chapter__sub">1.1.1.2 조화 과정</h2>
				<p className="chpater__contents">
					리액트에서 뷰를 업데이트할 때는 "업데이트 과정을 거친다"라고 하기
					보다는
					<b>"조화"</b> 과정을 거친다라고 하는 것이 더 정확한 표현입니다.{' '}
					<span className="under_line">
						컴포넌트에서 데이터에 변화가 있을 때 우리가 보기에는 변화에 따라
						뷰가 변형되는 것처럼 보이지만, 사실은 새로운 요소를 갈아끼우기
						때문입니다.
					</span>
					이 작업 또한 render 함수가 맡아서 합니다. 컴포넌트는 데이터를
					업데이트했을 때 단순히 값을 수정하는 것이 아니라, 새로운 데이터를
					가지고 render 함수를 또 다시 호출합니다. 하지만, 이때 render 함수가
					반환하는 결과를 곧바로 DOM에 반영하지 않고, 이전에 render 함수가
					만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌ㅌ 정보를
					비교합니다. 두 가지 뷰를 최소한의 연산으로 비교한 후, 둘의 차이를
					알아내 최소한의 연산으로 DOM 트리를 업데이트하는 것이죠.
				</p>
			</div>
			<div className="section">
				<h2 className="chapter__sub">1.2 리액트의 특징</h2>
				<h2 className="chapter__sub">1.2.1 Virtual DOM</h2>
				<p className="chpater__contents">
					DOM은 Document Object Model의 약어입니다. 즉, 객체로 문서 구조를
					표현하는 방법으로 XML이나 HTML로 작성합니다. 웹 브라우저는 DOM을
					활용하여 객체에 자바스크립트와 CSS를 적용합니다. DOM은 트리 형태라서
					특정 노드를 찾거나 수정하거나 제거하거나 원하는 곳에 삽입할 수
					있습니다. 요즘 DOM API를 수많은 플랫폼과 웹 브라우저에 사용하는데, 이
					DOM에는 치명적인 한 가지 문제점이 있습니다. 바로 동적 UI에 최적화되어
					있지 않다는 것입니다. HTML은 자체적으로는 정적입니다. 자바스크립트를
					사용하여 이를 동적으로 만들어줄 수 있습니다.
				</p>
				<p className="chpater__contents">
					DOM 자체는 빠릅니다. 하지만, DOM 자체를 읽고 쓸 때의 성능은
					자바스크립트 객체를 처리할 때의 성능과 비교하여 다르지 않습니다. 단,
					웹 브라우저 단에서 DOM에 변화가 일어나면 웹 브라우저가 CSS를 다시
					연산하고, 레이아웃을 구성하고, 페이지를 리페인트합니다. 이 과정에서
					시간이 허비되는 것입니다.
				</p>
				<p className="chpater__contents">
					<b className="chpater__contents">해결법</b>
				</p>
				<p className="chpater__contents">
					HTML 마크업을 시각적인 형태로 변환하는 것은 웹 브라우저가 하는 주
					역할이기 때문에, 이를 처리할 때 컴퓨터 자원을 사용하는 것은 어쩔 수
					없습니다. DOM을 조작할 때마다 엔진이 웹 페이지를 새로 그리기 때문에
					업데이트가 너무 잦으면 성능이 저하될 수 있습니다. 따라서 우리는 DOM을
					최소한으로 조작하여 작업을 처리하는 방식으로 개선할 수 있습니다.
				</p>
				<p className="chpater__contents">
					Virtual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신 이를 추상화한
					자바스크립트 객체를 구성하여 사용합니다. 마치 실제 DOM의 가벼운 사본과
					비슷합니다. 리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을
					업데이트할 때는 다음 세 가지 절차를 밟습니다.
				</p>
				<ul className="chapter__ul">
					<li className="chapter__li">
						<span className="bright">1. 전체 UI를 Virtual DOM에 리렌더링</span>
					</li>
					<li className="chapter__li">
						<span className="bright">2. 이전 내용과 현재 내용을 비교</span>
					</li>
					<li className="chapter__li">
						<span className="bright">3. 바뀐 부분만 실제 DOM에 적용</span>
					</li>
				</ul>
				<p className="chpater__contents">
					리액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리
					간결성입니다. UI를 업데이트하는 과정에서 생기는 복잡함을 모두
					해소하고, 더욱 쉽게 업데이트에 접근할 수 있습니다.
				</p>
			</div>
			<h2 className="chapter__sub">1.2.2 기타 특징</h2>
			<p className="chpater__contents">
				일부 웹 프레임워크가 MVC 또는 MVW 등의 구조를 지향하는 것과 달리
				리액트는 오직 뷰만 담당합니다. 다시 한 번 강조하면 리액트는 프레임워크가
				아니라 라이브러리입니다. 다른 웹 프레임워크가 Ajax, 데이터 모델링,
				라우팅 등과 같은 기능을 내장하고 있는 반면, 리액트는 정말 뷰만 신경 쓰는
				라이브러리이므로 기타 기능은 직접 구현하여 사용해야 합니다. 하지만, 너무
				걱정할 필요는 없습니다. 다른 개발자들이 만든 라이브러리, 즉 라우팅에는
				리액트 라우터, Ajax 처리에는 axios, fetch, 상태 관리에는 리덕스나,
				MobX를 사용하여 빈 자리를 채우면 됩니다. 해당 분야에서 마음에 드는
				라이브러리를 사용하면 되니까 자신의 취향대로 스택을 설정할 수 있다는
				장점이 있지만, 여러 라이브러리를 접해야 한다는 단점도 있습니다.
			</p>
		</div>
	);
}

export default Chapter1;
