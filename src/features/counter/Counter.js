import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => {
    console.log("global state from redux", state);
    return state.counter.value;
  });
  const dispatch = useDispatch();

  console.log("Count::", count);
  const handleOnIncrementClick = () => {
    dispatch(increment());
  };

  const handleOnDecrementClick = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={handleOnIncrementClick}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={handleOnDecrementClick}>
          Decrement
        </button>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(event.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              incrementByAmount({ amount: Number(incrementAmount) || 0 })
            )
          }
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
