import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Feelings = () => {
  const feelingRating = useSelector((store) => store.feelings);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    dispatch({ type: "PUT_FEELINGS", payload: event.target.value });
  };

  const next = () => {
    history.push('/understanding')
  }

  return (
    <>
      <h1>How are you feeling today? 1-5</h1>
      <div>
        <input type="number" min={1} max={5}  value={feelingRating} onChange={handleChange}/>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
};

export default Feelings;
