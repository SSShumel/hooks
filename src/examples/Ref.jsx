import { useEffect, useRef, useState } from "react"

export default function UseRefEx(){
    const [value, setValue] = useState('1')

    const renderCount = useRef(1)

    const inputRef = useRef(null)

    const prevValue = useRef("")

    useEffect(()=>{
        renderCount.current++
        console.log(inputRef.current.value)
    })

    useEffect(()=>{
        prevValue.current = value
    },[value])

    const focus = () => inputRef.current.focus()

    return (
        <div>
            <h1>количество рендеров: {renderCount.current}</h1>
            <h1>{prevValue.current}</h1>
            <input ref={inputRef} type="text" onChange={e=> setValue(e.target.value)} value={value}/>
            <button onClick={focus}>focus</button>
        </div> 
    )
}