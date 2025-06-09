import react, {useState, useCallback} from "react";
import ItemsList from "../ItemsList";

export default function Callback(){
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkred' : 'green'
    }

    const generateItemsFromAPI = useCallback(()=>{
        return new Array(count).fill('').map((_,i)=>`Элемент ${i +1}`)
    },[count])

    return (
        <>
        <h1 style={styles}>Count of elements: {count}</h1>
        <button onClick={()=>setCount(prev => prev+1)}>добавить</button>
        <button onClick={()=>setColored(prev => !prev)}>изменить</button>
        <ItemsList getItems={generateItemsFromAPI}/>
        </>
    )
}