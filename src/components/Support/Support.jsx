import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Support = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const inputRef = useRef(null);

  const next = () => {
    dispatch({ type: "PUT_SUPPORT", payload: inputRef.current.value });
    history.push("/comments");
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
