import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';
const Counter = ({ initialValue, a }) => {

  // 첫번째 인자는 상태의 값 이름
  // 두번째 인자는 상태변화 함수로써 사용
  // useState의 인자는 count의 초기값
  // 컴포넌트는 자신이 가진 state가 변화하면 reRender를 한다
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  }

  const onDecrease = () => {
    setCount(count - 1);
  }

  // 카멜케이스로 onClick 사용
  return (
    <div>
      <h2 style={{ color: "#000" }}>{count}</h2>
      <button onClick={onIncrease} type="button">+</button>
      <button onClick={onDecrease} type="button">-</button>
      <OddEvenResult count={count} />
    </div >
  )
}

// 전달받지 못한 props기본값세팅
Counter.defaultProps = {
  initialValue: 0,
}

export default Counter;