import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from './CountAction'
const Count = () => {
  const count= useSelector((state)=>state.count)
  const dispatch = useDispatch();
  return (
    <>
      <h3>Count :{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Count;
