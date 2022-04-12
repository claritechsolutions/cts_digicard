import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Redux() {
const myState = useSelector ((state)=>state.changeNumber)

  return (
    <div>
        <h1>increment/decrement</h1>
        <h4>use of redux</h4>
        <a title='incremnt'><span>-</span></a>
        <input type="text" value={myState} />
        <a title="decrement"><span>+</span></a>
    </div>
  )
}
