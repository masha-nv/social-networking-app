import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modal/modalReducer";
import { decrement, increment } from "./testReducer";

const Sandbox = () => {
  const [target, setTarget] = useState(null);
  const { isLoading } = useSelector((state) => state.async);
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Data is: {data}</h1>
      <Button
        name='increment'
        loading={target === "increment" && isLoading}
        content='Increment'
        color='green'
        onClick={(e) => {
          setTarget(e.target.name);
          dispatch(increment(10));
        }}
      />
      <Button
        name='decrement'
        loading={target === "decrement" && isLoading}
        content='Decrement'
        color='red'
        onClick={(e) => {
          setTarget(e.target.name);
          dispatch(decrement(2));
        }}
      />
      <Button
        content='Open Modal'
        color='teal'
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />
    </>
  );
};

export default Sandbox;
