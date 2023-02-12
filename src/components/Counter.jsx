import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const Counter = () =>{
    const[count,setCount]= useState(0)
    return (
        <>
        <p>Cantidad: {count}</p>
        <Button onClick={()=>setCount(count+1)} size="sm" variant="success">+</Button>{' '}
        <Button onClick={()=>setCount(count-1)} size="sm" variant="danger">-</Button>{' '}


        </>
    )
}