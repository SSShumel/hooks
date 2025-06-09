import react, {useState, useMemo, useEffect} from "react";
import UseStateEx from "./State";

function complexCompute(num){
    let i = 0
    while (i<1000000000) i++
    return num*2
}

export default function Memo() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    const computed = useMemo(()=>{
        return complexCompute(number)
    },[number])

    const styles = useMemo(()=>({
        color: colored ? 'darkred' : 'green'
    }),[colored])

    useEffect(()=>{
        console.log('color changed')
    },[styles])

    return (
        <>
        <h1 style= {styles}>вычисляемое значение: {computed}</h1>
        <button onClick={()=>setNumber(prev=>prev+1)}>добавить</button>
        <button onClick={()=>setNumber(prev=>prev-1)}>убавить</button>
        <button onClick={()=>setColored(prev=>!prev)}>изменить</button>
        </>
    )
}