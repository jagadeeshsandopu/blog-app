import React ,{useEffect, useState} from 'react'
import './topbar.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import {Link,Redirect} from 'react-router-dom';
import {useContext} from 'react';
import {axiosInstance} from "../config";
import AuthContext from '../authcontext'


const Topbar = () =>{
    
    const {loggedIn,username} = useContext(AuthContext);
    const [open,setOpen] =useState(false);
     
    let mod_username='';
    if(loggedIn && username)
    {
     const first_let=username.toUpperCase()[0];
     mod_username = first_let+username.substring(1);
    }


    const handleDelete = ()=>{
      axiosInstance.get('/auth/logout',{withCredentials:true});
      window.location.replace("/")
    } 
    
    return (
        
        
        <div className="top" > 
            
          {!loggedIn && <Redirect to=''/>}
          <div className="top-left" ><h1>BLOG APP</h1></div>
          
          <div className="top-right" >
            <Link to="/" style={{textDecoration:'none',fontSize:'4vh'}} ><h3>Home</h3></Link>
            <Link to="/about" style={{textDecoration:'none',fontSize:'4vh'}}><h3>About</h3></Link> 
            <Link to="/write" style={{textDecoration:'none',fontSize:'4vh'}}><h3>Write</h3></Link>  
            <Link to="/logout" style={{textDecoration:'none',fontSize:'4vh'}} onClick={handleDelete}><h3>Logout</h3></Link> 
            { !loggedIn &&<Link to="/login" style={{textDecoration:'none'}}><h3>Login</h3></Link>}
          </div>
          <div className={!open?"alt":"alt active"} >
            
            { 
             loggedIn&&username&&
              (
               <div className="slide-top">
                <div className="circle">
                 {username.toUpperCase()[0]}
                </div>

                <div className="name">
                 {mod_username}
                </div>
               </div>
              )
            } 


            <div className="toggle_bar_icons" >
             <HomeIcon/>
             <h2 className="link" >Home</h2>
            </div>

            <div className="toggle_bar_icons" >
             <InfoIcon/>
             <h2 className="link" >About</h2>
            </div>

            <div className="toggle_bar_icons" >
             <CreateIcon/>
             <h2 className="link" >Write</h2>
            </div>

            <div className="toggle_bar_icons" >
             <ArrowBackIcon/>              
             <h2 className="link">Logout</h2>
            </div>

            { !loggedIn && (<div className="toggle_bar_icons" >
                           <ArrowForwardIcon/>
                           <h2 className="link" >Login</h2>
                           </div>)}

            </div>
          <DehazeIcon onClick={() =>{setOpen(!open)}} className="dehaze" />
        </div>
    )
}

export default Topbar;