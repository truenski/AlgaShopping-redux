import { useSelector, useDispatch } from "react-redux"
import { sub, sum } from "../store/Calculator/calculator.actions"
import React, { useState } from "react"

 function Calculator () {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)
    const[a,setA] = useState(0)
    const[b,setB] = useState(0)

        //pega o estado atual no calculator.reduce



//dispatch(sum(6,4)) Chama o action creator sum. A ação também pode ser criada na hora:

    /*
    dispatch({
type:'SUM',
payload:[1,2]
    })
    */

    return (
        <>
            <input type='text' placeholder='a' onChange={e=>setA(Number(e.target.value))} />
            <input type='tex' placeholder='b' onChange={e=>setB(Number(e.target.value))} />

            <button onClick={()=>{
                dispatch(sum(a,b))}}>somar</button>
            <button onClick={()=>{
                dispatch(sub(a,b))}}> subtrair</button>
            <div>{result}</div>
        </>)

}

export default Calculator