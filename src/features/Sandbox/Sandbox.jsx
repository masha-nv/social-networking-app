import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

const Sandbox = () => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Data is: {data}</h1>
      <Button
        content='Increment'
        color='green'
        onClick={() => dispatch(increment(10))}
      />
      <Button
        content='Decrement'
        color='red'
        onClick={() => dispatch(decrement(2))}
      />
    </>
  );
};

export default Sandbox;
