import React,{useState} from 'react';


const ComponentA = () =>{
    const [count,setCount] = useState(0)

    const Hello = () => {
        console.log('Hello world');
      }

    const clickMe = () => {
        window.alert('Hello world')
      }
    
    const increment = () => {
        setCount(count + 1)
      }

    const decrement = () => {
        setCount(count - 1)
      }
    　
    const reset = () => {
        setCount(0)
      }

return(

    <div>
        <div>
        <h1>level 1</h1>
        <button onClick={Hello}>Hello World</button></div>

        <div>
        <h1>level 2</h1>
        <button onClick={clickMe}>Hello World2</button></div>

        <div>
        <h1>level 3</h1>
        <button onClick={increment}>いいね!</button>
        <button onClick={decrement}>良くないね!</button>
        <button onClick={reset}>reset</button>
        {count}
        </div>

    </div>

)

}



export default ComponentA ;