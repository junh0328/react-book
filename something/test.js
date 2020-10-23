import React from "react";

const data = {
  junhee: {
    name: "이준희",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const test = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div></div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default test;

/*App 부분

<ul>
  <li>
    <Link to ="/profile/junhee">junhee의 프로필</Link>
  </li>
</ul>

<Route path="/profile/:username" component={Profile} />>

*/

/*

{
  "pathname" : "/about",
  "search" : "?detai;=true",
  "hash" : ""
}

*/
