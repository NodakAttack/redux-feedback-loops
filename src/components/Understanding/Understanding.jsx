import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Understanding = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const understanding = useSelector((store) => store.understanding);

  const inputRef = useRef(null);

  const next = () => {
    dispatch({ type: "PUT_UNDERSTANDING", payload: inputRef.current.value });
    history.push('/')
    console.log("understanding is ", understanding);
  };

  return (
    <>
      <h1>How are you understanding today? 1-5</h1>
      <div>
        <input type="number" ref={inputRef} />
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Understanding;
