import React from 'react'
import { Link } from "react-router-dom";

const PageA = () =>{

return(
    <div>
      <Link to="/">ComponentA</Link>
      <Link to="ComponentB">ComponentB</Link>
      <Link to="/PageB/xxx">PageB</Link> 

    <h1>level11</h1>       

</div>
  )
}

export default PageA