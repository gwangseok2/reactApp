const OddEvenResult = ({ count }) => {
  console.log(count);
  return count % 2 === 0 ? <h1>"홀수"</h1> : <h1>"짝수"</h1>
}

export default OddEvenResult