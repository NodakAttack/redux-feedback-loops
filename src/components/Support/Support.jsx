import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Support = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const inputRef = useRef(null);

  const next = () => {
    // input logic to check if number is between 1-5
    if (inputRef.current.value >= 1 && inputRef.current.value <= 5) {
      dispatch({ type: "PUT_SUPPORT", payload: inputRef.current.value });
      history.push("/comments");
    } else {
      alert("enter a number between 1-5");
    }
  };

  return (
    <>
      <h1>How are you supported today? 1-5</h1>
      <div>
        <input type="number" ref={inputRef} />
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Support;
