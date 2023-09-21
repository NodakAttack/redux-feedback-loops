import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'

const Submit = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch({type: 'CLEAR' })
        history.push('/');
    }
  return (
    <>
    <h1>Feeback recieved</h1>
    <button onClick={handleReset}>Start Again</button>
    </>
  )
}

export default Submit