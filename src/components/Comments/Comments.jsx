import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Comments = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const inputRef = useRef(null);

  const next = () => {
    dispatch({ type: "PUT_COMMENTS", payload: inputRef.current.value });
    history.push("/");
  };

  return (
    <>
      <h1>Have any comments today?</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Comments;