import './App.css';

import Container from './Container';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
// jSX문법
function App() {
  const style = {
    App: {
      backgroundColor: "#fff",
      color: "#111",
    },
    h2: {
      color: "red",
    },
    bold: {
      color: "#ccc",
    }
  }

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5,
  }
  return (
    <Container>
      <div className="App" style={style.App}>
        <MyHeader />
        <Counter {...counterProps} counter={11212} />
        <MyFooter />
      </div>
    </Container>
  );
}


export default App;
