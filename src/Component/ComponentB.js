import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ComponentB = () =>{
   const [ posts, setPosts] = useState([])
   useEffect(() => {
      axios.get('https://qiita.com/api/v2/items')
      .then(res => {
          setPosts(res.data)
   })
   }, [])

return(
<div>  
 <Link to="/">ComponentA</Link> 
    <div>
      <h1>level 8,9</h1>
         <ul>
         { posts.map(post => <li key={post.id}> {post.title} </li>)}
         </ul>
    </div>
</div>
);
}
export default ComponentB