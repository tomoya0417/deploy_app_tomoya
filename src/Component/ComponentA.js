import React,{ useState }  from 'react';
import { Link } from "react-router-dom";

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

        const index = Math.floor(Math.random()*3);
        const handArray = ['ぐー','ちょき','ぱー'];
        const enemyHand = handArray[index];
        const [my,setMy] = React.useState('');
        const [enemy,setEnemy] = React.useState('');
        const [result,setResult] = React.useState('');
        const fight = (myHand) => {
            if(myHand === enemyHand){
                setResult('引き分け');
                setMy(myHand)
                setEnemy(enemyHand);
              };
              if(enemyHand === 'ぐー' && myHand === 'ぱー' || enemyHand === 'ちょき' && myHand === 'ぐー' || enemyHand === 'ぱー' && myHand === 'ちょき'){
                setResult('あなたの勝ちです。');
                setMy(myHand)
                setEnemy(enemyHand);
              };
              if(enemyHand === 'ぐー' && myHand === 'ちょき' || enemyHand === 'ちょき' && myHand === 'ぱー' ||enemyHand === 'ぱー' && myHand === 'ぐー'){
                setResult('あなたの負けです。');
                setMy(myHand)
                setEnemy(enemyHand);
              };
            }
    
    return(

    <div>
      <Link to="ComponentB">ComponentB</Link>
      <Link to="PageA">PageA</Link>
      <Link to="/PageB/zzz">PageB</Link> 
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
        <h1>level 6.7</h1>
        <button onClick={()=>fight('ぐー')}>ぐー</button>
        <button onClick={()=>fight('ちょき')}>ちょき</button>
        <button onClick={()=>fight('ぱー')}>ぱー</button>
        
        <p>自分の手 : {my}</p>
        <p>cpuの手 : {enemy}</p> 
        <p>勝敗 : {result}</p>   
        </div>
    </div>
);

}



export default ComponentA