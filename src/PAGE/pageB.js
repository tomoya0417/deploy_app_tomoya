import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from　'react-router-dom'

const PageB = () =>{
    const { slug } = useParams();
  console.log(slug)

return(
    <div>
      <Link to="/">ComponentA</Link>
      <Link to="ComponentB">ComponentB</Link>
      <Link to="/PageA">PageA</Link> 

      <h1>level11</h1>
      <h2>{slug}</h2>
    </div>
)
}

export default PageB