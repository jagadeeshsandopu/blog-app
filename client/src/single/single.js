import {Redirect, useLocation} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import './single.css'
import Topbar from '../topbar/topbar'
import DeleteIcon from '@mui/icons-material/Delete';
import AuthContext from '../authcontext';
import axios from 'axios';

const Single= () =>{
  
  const [fetchedpost , setFetchedpost] = useState();
  const [permit , setPermit] = useState(false)

  const {username,loggedIn} = useContext(AuthContext);

  let location = useLocation();
  let arr = location.pathname.split('/')
  let id = arr[2];
  let url =`http://localhost:5000/posts/${id}`

  console.log(id)

  useEffect(() =>{
   
   const getsinglepost =  () =>{
    axios.get(url,{
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

  },[location])

  const deletepost = async () =>{
   
    try{
      await axios.delete(`http://localhost:5000/posts/${id}`,{data:{username:username}})
    }
    catch(err)
    {console.log(err);}
  }

  const Deletepost = () =>{
    axios.get('http://localhost:5000/')
  }
  
  console.log(fetchedpost);

  return (
      <div>
        <Topbar/>

        {!loggedIn && <Redirect to='/'/>}
        <img className="singleimage" src="data:image/jpeg;base64,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" />
        
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
          
        </div>
        
      </div>
  )
}

export default Single;