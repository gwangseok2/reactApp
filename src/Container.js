const Container = ({ children }) => {
  // 자식요소를 children이란 prop으로 전달 받을 수 있다
  console.log(children, 'children')
  return <div style={{ margin: 20, padding: 20, border: "1px solid #ccc" }}>
    {children}
  </div>
}

export default Container;