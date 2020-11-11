import React from 'react';
import spa1 from './imgs/chapter13/spa1.png';
import spa2 from './imgs/chapter13/spa2.png';
import spa9 from './imgs/chapter13/spa9.png';
import spa4 from './imgs/chapter13/spa4.png';
import spa5 from './imgs/chapter13/spa5.png';
import spa6 from './imgs/chapter13/spa6.png';
import spa7 from './imgs/chapter13/spa7.png';
import spa8 from './imgs/chapter13/spa8.png';
import spa10 from './imgs/chapter13/spa10.png';
import spa11 from './imgs/chapter13/spa11.png';

const Chapter13 = () => {
	return (
		<div className="wrap">
			<h1 className="chapter__main">
				Chapter 13, 리액트 라우터로 SPA 개발하기
			</h1>
			<h2 className="chapter__sub">13.1 SPA란?</h2>
			<p>
				SPA는 Single Page Application의 약어입니다. 말 그대로 한 개의 페이지로
				이루어진 애플리케이션이라는 의미입니다. 기존에는 사용자가 다른 페이지로
				이동할 때마다 새로운 html을 받아 오고, 페이지를 로딩할 때마다 서버에서
				리소스를 전달받아 해석한 뒤 화면에 보여 주었습니다. 이렇게 사용자에게
				보이는 화면은 서버 측에서 준비했습니다. 사전에 html 파일을 만들어서
				제공하거나, 데이터에 따라 유동적인 html을 생성해주는 템플릿 엔진을
				사용하기도 했죠.
			</p>
			<p>
				요즘에는 웹에서 제공되는 정보가 정말 많기 때문에 새로운 화면을 보여
				주어야 할 때마다 서버 측에서 모든 뷰를 준비한다면 성능상의 문제가 발생할
				수 있습니다. 트래픽이 너무 많이 나올 수도 있고, 사용자가 몰려 서버에
				높은 부하가 쉽게 걸릴 수도 있습니다. 그래서 리액트 같은 라이브러리 혹은
				프레임워크를 사용하여 뷰 렌더링을 사용자의 브라우저가 담당하도록 하고,
				우선 애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의
				인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트해
				줍니다. 만약 새로운 데이터가 필요하다면 서버 API를 호출하여 필요한
				데이터만 새로 불러와 애플리케이션에서 사용할 수도 있습니다.
			</p>
			<p>
				싱글 페이지라고 해서 화면이 한 종류인 것은 아닙니다. SPA의 경우 서버에서
				사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에서 로딩된
				자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을
				보여 줄 수 있습니다.
			</p>
			<p>
				다른 주소에 다른 화면을 보여 주는 것을 <b>라우팅</b>이라고 합니다.
				리액트 라이브러리 자체에 이 기능이 내장되어 있지 않기 때문에, 브라우저의
				API를 직접 사용하여 이를 관리하거나, 라이브러리를 사용하여 이 작업을
				더욱 쉽게 구현할 수 있습니다.
			</p>
			<p>
				리액트 라우팅 라이브러리는 리액트 라우터(react-router), 리치
				라우터(reach-router), Next.js 등 여러 가지가 있습니다. 이러한 리액트
				라우팅 라이브러리는 클라이언트 사이드에서 이루어지는 라우팅을 아주
				간단하게 구현할 수 있도록 해 줍니다. 더 나아가 나중에 서버 사이드
				렌더링을 할 때도 라우팅을 도와주는 컴포넌트들을 제공해 줍니다.
			</p>
			<h3 className="chapter__sub">13.1.1 SPA의 단점</h3>
			<p>
				SPA의 단점은 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다는
				것입니다. 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는
				페이지의 스크립트를 불러오기 때문입니다. 하지만{' '}
				<b>코드 스플리팅(code-splitting)</b>을 사용하면 라우트별로 파일들을
				나누어 트래픽과 로딩 속도를 개선할 수 있습니다.
			</p>
			<p>
				리액트 라우터처럼 브라우저에서 자바스크립트를 사용하여 라우팅을 관리하는
				것은 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를
				제대로 수집해 가지 못한다는 잠재적인 단점이 따릅니다. 그렇기 때문에
				구글, 네이버, 다음과 같은 검색 엔진의 검색 결과에 페이지가 잘 나타나지
				않을 수도 있습니다. 또한, 자바스크립트가 실행될 때까지 페이지가 비어
				있기 때문에 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 흰
				페이지가 나타날 수 있다는 단점도 있습니다. 하지만 이런 문제점들은 다행히
				나중에 배우게 될 서버 사이드 렌더링(server-side-rendering)을 통해 모두
				해결할 수 있습니다.
			</p>
			<h2 className="chapter__sub">13.2 프로젝트 준비 및 기본적인 사용법</h2>
			<ul className="ul__box">
				<li className="li__box">프로젝트 생성 및 리액트 라우터 적용</li>
				<li className="li__box">페이지 만들기</li>
				<li className="li__box">Route 컴포넌트로 특정 주소에 컴포넌트 연결</li>
				<li className="li__box">라우트 이동하기</li>
				<li className="li__box">URL 파라미터와 쿼리 이해하기</li>
				<li className="li__box">서브 라우트</li>
				<li className="li__box">부가 기능 알아보기</li>
			</ul>
			<p>
				내용과 별개로 이 블로그 형태 역시 리액트 라우트 기능을 사용하기 때문에,
				제가 필요한 부분을 발췌하여 정리하도록 하겠습니다.
			</p>
			<h3 className="chapter__sub">13.2.2 프로젝트에 라우터 적용</h3>
			<p>
				프로젝트에서 리액트 라우터를 적용할 때는 src/index.js 파일에서
				react-router-dom에 내장되어 있는 <b>BrowserRouter</b>라는 컴포넌트를
				사용하여 감싸면 됩니다. 이 컴포넌트는 웹 애플리케이션에 HTML5의 History
				API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에
				관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해 줍니다.
				<img src={spa8} alt="spa8" className="chapter__imgs"></img>
			</p>
			<h3 className="chapter__sub">
				13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기
			</h3>
			<p>
				Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트입니다. 일반
				웹 애플리케이션에서는 a 태그를 사용하여 페이지를 전환합니다. 하지만
				리액트 라우터를 사용할 때는 이 태그를 직접 사용하면 안 됩니다.{' '}
				<b>
					이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에
					애플리케이션이 들고 있던 상태들을 모두 날려 버리게 됩니다.
				</b>{' '}
				렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링하게 됩니다.
			</p>
			<p>
				Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고
				애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여
				페이지의 주소만 변경해 줍니다. Link 컴포넌트 자체는 a 태그로 이루어져
				있지만, 페이지 전환을 방지하는 기능이 내장되어 있습니다.
			</p>
			<h2 className="chapter__sub">URL 파라미터와 쿼리</h2>
			<p>
				페이지 주소를 정의할 때 가끔은 유동적인 값을 전달해야 할 때도 있습니다.
				이는 <b>파라미터</b>와 <b>쿼리</b>로 나눌 수 있습니다.
				<img src={spa1} alt="spa1" className="chapter__imgs_w40" />
				유동적인 값을 사용해야 하는 상황에서 파라미터를 써야 할지 쿼리를 써야
				할지 정할 때, 무조건 따라야 하는 규칙은 없습니다. 다만 일반적으로
				<b>
					파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때 사용
				</b>하고,{' '}
				<b>
					쿼리는 우리가 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할
					때 사용
				</b>
				합니다.
			</p>
			<h3 className="chapter__sub">13.4.1 URL 파라미터</h3>
			<img src={spa2} alt="spa2" className="chapter__imgs_w40" />
			<p>
				URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는
				&nbsp;<b>match</b>라는 객체 안의 params 값을 참조합니다. &nbsp;
				<b>match</b> 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해
				보이는지에 대한 정보가 들어 있습니다. 사용자가 주소를 입력하면, 'Route
				path'에 의해 라우팅되어 처리되는 url 파라미터는 개발자가 지정한 'Link
				to' 에 따라 라우팅되어 해당 프로필로 이동하게 됩니다.
			</p>
			<p>
				URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는
				&nbsp;<b>match</b>라는 객체 안의 params 값을 참조합니다. &nbsp;
				<b>match</b> 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해
				보이는지에 대한 정보가 들어 있습니다.
			</p>
			<img src={spa9} alt="spa9" className="chapter__imgs" />
			<p>
				주목해야 할 부분은 Route path의 /profile/:username 부분입니다.
				파라미터를 받아오기 때문에 :username에 들어가는 부분은 Link에 따라
				유동적으로 바뀐다는 것을 알아두어야 합니다. 이렇게 설정하면
				match.params.username 값을 통해 현재 username 값을 조회할 수 있습니다.
			</p>
			<h3 className="chapter__sub"> 13.4.2 URL 쿼리</h3>
			<p>
				이번에는 URL에서 쿼리를 이용하여 정보를 받아 오겠습니다. 쿼리는 location
				객체에 들어 있는 search 값에서 조회할 수 있습니다. location 객체는
				라우트로 사용된 컴포넌트에게 props로 전돨되며, 웹 애플리케이션의 현재
				주소에 대한 정보를 지니고 있습니다.
			</p>
			<img src={spa4} alt="spa4" className="chapter__imgs" />
			<p>
				위 location 객체는 http://localhpst:3000/about?detail=true 주소로
				들어갔을 때의 값입니다.
			</p>
			<p>
				URL 쿼리를 읽을 때는 위 객체가 지닌 값 중에서 search 값을 확인해야
				합니다. 이 값은 문자열 형태로 되어 있습니다.
			</p>
			<h2 className="chapter__sub">13.6 리액트 라우터 부가 기능</h2>
			<h3 className="chapter__sub">13.6.1 history</h3>
			<p>
				<b>history</b>객체는 라우트로 사용된 컴포넌트에 match, location과 함께
				전달되는 props 중 하나로, 이 객체를 통해 컴포넌트 내에 구현하는
				메서드에서 라우터 API를 호출할 수 있습니다. 예를 들어 특정 버튼을 눌렀을
				때 뒤로 가거나, 로그인 후 화면을 전환하거나, 다른 페이지로 이탈하는 것을
				방지해야 할 때 history를 활용합니다.
				<img src={spa10} alt="spa10" className="chapter__imgs"></img>
			</p>
			<h3 className="chapter__sub">13.6.2 withRouter</h3>
			<p>
				withRouter 함수는 HoC(Higher-order Component)입니다. 라우트로 사용된
				컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해
				줍니다.
				<img src={spa11} alt="spa11" className="chapter__imgs"></img>
				리액트 라우터 돔의 기능 중 하나인 withRouter를 사용하기 위해서는
				export시킬 해당 컴포넌트를 withRouter로 감싸주면 됩니다.
			</p>
			<h3 className="chapter__sub">13.6.3 Switch</h3>
			<p>
				Switch 컴포넌트는 여러 Router를 감싸서 그 중 일치하는 단 하나의
				라우트만을 렌더링시켜 줍니다. Switch를 사용하면 모든 규칙과 일치하지
				않을 때 보여 줄 Not Found 페이지도 구현할 수 있습니다.
			</p>
			<img src={spa5} alt="spa5" className="chapter__imgs" />
			<p>...</p>
			<img src={spa6} alt="spa6" className="chapter__imgs" />
			<p>...</p>
			<img src={spa7} alt="spa7" className="chapter__imgs" />
			기존에 구성했던 Route path를 Switch로 감싼 후에 render합니다. path를 따로
			정의하지 않으면 모든 상황에 렌더링될 수 있게 설정을 하였습니다. 존재하지
			않는 페이지를 url에 직접 검색할 시에 나타나는 결과를 확인해보세요
		</div>
	);
};

export default Chapter13;
