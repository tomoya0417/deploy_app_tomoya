import React from 'react';


const ComponentA = () =>{

    const Hello = () => {
        console.log('Hello world');
      }

      const clickMe = () => {
        window.alert('Hello world')
      }

return(

    <div>
        <div>
        <h1>level 1</h1>
        <button onClick={Hello}>Hello World</button></div>

        <div>
        <h1>level 2</h1>
        <button onClick={clickMe}>Hello World2</button></div>

    </div>

)

}



export default ComponentA ;