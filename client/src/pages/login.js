import './login.css'
import {Link,Redirect} from 'react-router-dom'
import {useState,useEffect,useContext} from'react';
import AuthContext from '../authcontext';
import {axiosInstance} from "../config";

const Login = () =>{
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {loggedIn,setLoggedIn} = useContext(AuthContext);
  

    const handleSubmit = async (event) =>{
      event.preventDefault();
      try{
      const logindata = {
          email,
          username,
          password
        }
        const response = await axiosInstance.post('/auth/login',logindata,{
          withCredentials:true
        });
        setEmail("")
        setUsername("")
        setPassword("")

        if(response.status!=200)
        {setLoggedIn(2)}
        else
        {setLoggedIn(1)} 
      }
      catch(err){
        console.log(err)
        setLoggedIn(2)
      }
    }

    return (
      <>

       {( <form className="login" onSubmit={handleSubmit} >
         
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

        <button className="loginbutton" type="submit">Login</button>
        <Link className="inputlink" to="/register" ><h3>First Time? Register</h3></Link>
      
      </form> )}

      {loggedIn==1 && <Redirect to="/" />}
      
     </>

    )
}

export default Login;