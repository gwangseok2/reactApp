import './App.css';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
// jSX문법
function App() {
  const style = {
    App: {
      backgroundColor: "#1f1f1f",
      color: "#fff",
    },
    h2: {
      color: "red",
    },
    bold: {
      color: "#ccc",
    }
  }
  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <Counter />
      <MyFooter />
    </div>
  );
}


export default App;
