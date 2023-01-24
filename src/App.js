import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="header">
        <h1>Increment/Decrement Counter</h1>
        <h3>using React and Redux</h3>
        <div className="counter">
          <div onClick={() => dispatch(decNumber(5))}>-</div>
          <div>{myState}</div>
          <div onClick={() => dispatch(incNumber(5))}>+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
