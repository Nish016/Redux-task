import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  const counternumber = useSelector((state) => state.counternumber);
  const dispatch = useDispatch(); // To execute dispatch action

  return (
    <div className="App">
      <div className="container">
        <div className="buttonpos">
          <button onClick={() => dispatch(increment())}>Click Me</button>
        </div>
        <div className="cardpos">
          <div className="card">
            <h1>{counternumber}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
