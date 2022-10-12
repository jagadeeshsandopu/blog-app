import './content.css'
import Post from '../post/post'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
const Content = (props) =>{
  
    return (
      <div className="content" >
       {
         props.posts.map((post) =>{
          return <Link to={`/post/${post._id}`} className="postlink" ><Post key={post._id} post ={post} /></Link>
         })
       }

      </div>
    )
}


export default Content;