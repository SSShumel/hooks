import React, { useEffect, useState } from "react"

export default function UseEffectEx(){
    const[type, setType] = useState('users')
    const [data, setData] = useState()
    const [pos, setPos] = useState({
        x:0, y:0,
    })
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
    }, [type])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }

    useEffect(()=>{
        window.addEventListener('mousemove', mouseMoveHandler)

        return ()=>{
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    },[])
    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={()=>setType("users")}>users</button>
            <button onClick={()=>setType("todos")}>todo</button>
            <button onClick={()=>setType("posts")}>posts</button>

            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
        
    )
}