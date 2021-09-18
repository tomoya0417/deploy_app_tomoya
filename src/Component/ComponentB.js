import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ComponentB = () =>{


return(
<div>  
 <Link to="/">ComponentA</Link> 
    <div>
       <h1>level 8</h1>
    </div>
</div>
)
}
export default ComponentB