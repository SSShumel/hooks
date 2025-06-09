import { useState } from "react"

export default function UseStateEx(){
  const [count, setCount] = useState(0)
    const [state, setState] = useState({
        title: "Pisya",
        date: Date.now()
    })
  return (
    <div>
    <h1>счетчик {count}</h1>
    <button onClick={()=>setCount(count+1)}>добавить</button>
    <button onClick={()=>setCount(count-1)}>удалить</button>
    <button onClick={()=>setState(prev => { 
      return {
        ...prev,
        title:"chipi-chipi"
      }
    })}>изменить</button>

    <pre>{JSON.stringify(state, null, 2)}</pre>
</div>
  )
     
    
}

