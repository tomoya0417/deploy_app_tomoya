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
      console.log("🚀 ~ file: ComponentB.js ~ line 7 ~ ComponentB ~ posts", posts)
   }, [])
return(
<div>  
 <Link to="/">ComponentA</Link>
 <Link to="PageA">PageA</Link>
 <Link to="PageB">PageB</Link> 
   <table class="table table-striped">
    <div>
      <h1>level 8,9</h1>
      <h3>記事一覧</h3>
         <ul>
         { posts.map(post => {
            return(
               <li key={post.id}> 
                  <a href={post.url}>
                     {post.title} 
                  </a>
               </li>
            )}) 
         }
         </ul>
    </div>
    </table>
</div>
);
}
export default ComponentB