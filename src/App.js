import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const myState = useSelector((state) => state.changeTheNumber());
  return (
    <div className="App">
      <div className="header">
        <h1>Increment/Decrement Counter</h1>
        <h3>using React and Redux</h3>
        <div className="counter">
          <div>-</div>
          <div>{0}</div>
          <div>+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
