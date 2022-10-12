import './login.css'
import {Link, Redirect} from 'react-router-dom'
import {useState,useEffect} from'react';
import axios from 'axios';


const Register = () =>{
    const [email,setEmail] = useState("");
    const [condition,setCondition] = useState(undefined);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    let response

    const handleSubmit = async (event) =>{
      event.preventDefault();
      try{
      const logindata = {
          email,
          username,
          password
        }
          response = await axios.post('http://localhost:5000/auth/register',logindata,{
          withCredentials:true
        });
        setEmail("")
        setUsername("")
        setPassword("")
        
        setCondition(response.data.result);
         
      }catch(err){
        console.log(err)
      }
      
    }



    return (
        <>
        { (condition!== true && <form className="login" onSubmit={handleSubmit} >

        <h1 style={{margin:"20px 0 0 0 ",fontSize:"40px",color:"black"}}>Blog App</h1>

        <div className="inputt" >
          <h5>Email</h5>
          <input className="inputfield" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>

        <div className="inputt" >
          <h5>Username</h5>
          <input className="inputfield" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        </div>

        <div className="inputt" >
          <h5>Password</h5>
          <input className="inputfield" type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>

        <button className="loginbutton" type="submit">Register</button>
        
      </form> )}
      {
       condition===true&& <Redirect to="/login" />
      }
      
     </>
   )
    
}

export default Register;