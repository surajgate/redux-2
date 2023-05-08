import React, { useRef } from 'react'
import { useAppDispatch } from '../store/features/store';
import { addPerson } from '../store/features/personSlice';

const Add = () => {

    const name = useRef<string>("");
    const dispatch = useAppDispatch();
  return (
    <>
    <form action="">
        <label htmlFor="">Person Name :</label>
        <input type="text" />
        <button onClick={()=>{dispatch(addPerson({name : name.current}))}}>Add</button>
    </form>
    </>
  )
}

export default Add