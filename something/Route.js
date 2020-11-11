import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

const Route = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/profile/junhee">준희의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">길동의 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default Route;
