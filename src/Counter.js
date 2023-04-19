import React, { useState } from 'react';
const Counter = () => {

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

  const [count2, setCount2] = useState(0);
  const onIncrease2 = () => {
    setCount2(count2 + 1);
  }

  const onDecrease2 = () => {
    setCount2(count2 - 1);
  }
  // 카멜케이스로 onClick 사용
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease} type="button">+</button>
      <button onClick={onDecrease} type="button">-</button>
      <h2>{count2}</h2>
      <button onClick={onIncrease2} type="button">+</button>
      <button onClick={onDecrease2} type="button">-</button>
    </div>
  )
}

export default Counter;