import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from　'react-router-dom'

const PageB = () =>{

return(
    <div>
      <Link to="/">ComponentA</Link>
      <Link to="ComponentB">ComponentB</Link>
      <Link to="PageA">PageA</Link> 

      <h1>level11</h1>
    </div>
)
}

export default PageB