import React from "react";

class test extends Component {
  render() {
    const { name, children } = this.props;

    return (
      <div>
        안녕하세요 제 이름은 {name} 입니다. children값은 {children} 입니다.
      </div>
    );
  }
}

test.defaultProps = {
  name: "기본 이름",
};

export default test;
