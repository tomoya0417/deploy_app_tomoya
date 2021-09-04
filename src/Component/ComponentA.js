import React,{ useState }  from 'react';


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

    const [change, setChange] = useState("");
    
    const [massege, setMassege] = useState("");

    const [errorMassege, setErrorMassege] = useState("");
    
    const handleClick = () => {
      if(change === ""){
        setErrorMassege("なにか文字を入力してください。")
        setMassege("")
    }
      else{
        setMassege(change)
        setErrorMassege("")
        }
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

        <div>
        <h1>level 4,5</h1>
        <input type="text" name="name" onChange={e => setChange(e.target.value)}/>
        <button onClick={handleClick}>hello</button>
        <div>{massege}</div>
        <div style={{color:'red'}}>{errorMassege}</div>
        </div>

        <div>
        <h1>level 6</h1>
        <button>ぐー</button>
        <button>ちょき</button>
        <button>ぱー</button>
        </div>
    </div>



)

}



export default ComponentA ;