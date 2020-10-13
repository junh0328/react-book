import React from 'react';
import styles from './CSSModule.module.css';

const test = () => {
	return (
		<div className={styles.wrapper}>
			안녕하세요, 저는 <span className="something">CSS Module!</span>
			{/* something은 글로벌 모듈로 설정했기 때문에 이렇게 사용이 가능하다 */}
		</div>
	);
};

export default test;
