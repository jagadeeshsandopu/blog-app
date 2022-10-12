import axios from "axios";
import {createContext,useState,useEffect} from "react";

const AuthContext = createContext();

function Contextprovider(props)
{
 const [loggedIn,setLoggedIn] = useState(0);
 const [username,setUsername] = useState('');

 async function getLoggedIn(){
 
  const condition = await axios.get("http://localhost:5000/auth/loggedIn",{withCredentials:true});
  setLoggedIn(condition.data.condition);
  setUsername(condition.data.name);
 }

useEffect(()=>{
   getLoggedIn();
   console.log(loggedIn)
},[loggedIn]);



 return <AuthContext.Provider value={{loggedIn,getLoggedIn,username,setLoggedIn}} >
   {props.children}
 </AuthContext.Provider>
}

export default AuthContext;
export {Contextprovider};