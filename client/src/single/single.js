import {Redirect, useLocation} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import './single.css'
import Topbar from '../topbar/topbar'
import Comment from '../comment/comment'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AuthContext from '../authcontext';
import {axiosInstance} from "../config";


const Single= () =>{
  
  const [fetchedpost , setFetchedpost] = useState();
  const [comment, setComment] = useState();
  const [val,setVal]=useState(0);
  const [permit , setPermit] = useState(false)

  const {username,loggedIn} = useContext(AuthContext);

  let location = useLocation();
  let arr = location.pathname.split('/')
  let id = arr[2];
  let url =`/posts/${id}`

  console.log(id)

  useEffect(() =>{
   
   const getsinglepost =  () =>{
    axiosInstance.get(url,{
      withCredentials:true
    }).then(res =>{
      console.log(res.data.permission)
      setPermit(res.data.permission)
      setFetchedpost(res.data.post)
    }).catch(err =>{
      console.log(err);
    })
   
   }
   getsinglepost();

  },[location,val])

  const deletepost = async () =>{
   
    try{
      await axiosInstance.delete(`/posts/${id}`,{data:{username:username}})
      window.location.replace("/")
    }
    catch(err)
    {console.log(err);}
  }

  const updatepost = async () =>{

   const response=await axiosInstance.put(`/posts/${id}`,
   {name:username,comment:comment}).then((response) =>{
    console.log(response)
    setComment('')
    setVal(val+1)
   }).catch((err) =>{
     console.log(err)
   })

  }
  
  console.log(fetchedpost)

  return (
      <div>
        <Topbar/>

        {!loggedIn && <Redirect to='/'/>}
        <img className="singleimage" src="" />
        
        <div className='single'>
         
          <div className='single-top'>
             {fetchedpost?fetchedpost.title:""}
          </div>

          <div className='single-middle'>
             {fetchedpost?fetchedpost.username:""} 
             {permit && <div className='single-delete' onClick={deletepost}><DeleteIcon/></div>}
          </div>

          <div className='single-content'>
            {fetchedpost?fetchedpost.description:""}
          </div>
          
          <div className='main-content'>
            {fetchedpost?fetchedpost.content:""}
          </div>
          
          <div className='comment'>
             <input value={comment} className="commentinput" type="text" placeholder='Post your comment' onChange={(e)=>{setComment(e.target.value)}}></input>
             <div className="comment-button">
                <Button  onClick={updatepost} variant="contained">Submit</Button>
             </div>
             
          </div>
          
          {
           fetchedpost?fetchedpost.comments.map((comment) =>{
             return <Comment comment={comment} />
           }):""
          }
        </div>
        
      </div>
  )
}

export default Single;