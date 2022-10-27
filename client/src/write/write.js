import './write.css'
import Topbar from '../topbar/topbar'
import {useState} from 'react';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import { useContext } from 'react';
import AuthContext from '../authcontext';
import Notloggedin from '../pages/notloggedin';
import {axiosInstance} from "../config";

const Write = () =>{
 
  const {loggedIn,username} = useContext(AuthContext);
  
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [content,setContent] = useState("");

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
    const logindata = {
        title,
        description,
        content,
        username
      }
      const response = await axiosInstance.post('/posts/',logindata,{
        withCredentials:true
      });
      setTitle("")
      setDescription("")
      setContent("")
      window.location.replace("/")
      console.log(response)

    }catch(err){
      console.log(err)
    }
  }

 return (
    <>
      {loggedIn &&(<div>
       <Topbar/>
       <div className = "write">
        <form className="writeform" onSubmit={handleSubmit}>
        
         <div className="writeformgroup " >
           <input  className="writeinput" type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} />
         </div>

         <div className="writeformgroup " >
           <input  className="writeinput" type="text" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}} />
         </div>

         <div className="writeformgroup">
           <textarea
             placeholder = "Write your Post . . ."
             type ="text"
             className="text" onChange={(e)=>{setContent(e.target.value)}}
           />
         </div>
         <button  className="submitbutton" type="submit" >Publish</button>
       </form>
       
       </div>
      </div>)
      }
      {!loggedIn && <Notloggedin/>}
     </>
 )

}


export default Write;