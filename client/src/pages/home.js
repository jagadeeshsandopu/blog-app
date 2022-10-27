
import './home.css'
import Sidebar from '../sidebar/sidebar'
import Content from '../content/content'
import {useState,useEffect} from 'react';
import Topbar from '../topbar/topbar';
import {axiosInstance} from "../config";
import { useContext } from 'react';
import AuthContext from '../authcontext';
import Notloggedin from './notloggedin'

const Home = () => {
  
  const [posts,setPosts] = useState([]);
  

  const {loggedIn} = useContext(AuthContext);
   
   useEffect(() =>{
    const fetchallposts = async () =>{
    const allposts =  await axiosInstance.get("/posts/allposts");
    setPosts(allposts.data);
   }
   fetchallposts();
  },[]);
  
  
  
  return(
         <>
          {(loggedIn)&&(
          <div className="main">
           <Topbar/>
           <div className="home" >
        
            <div className="header" >
              <h1>A place to write , read and connect.</h1>
              <p> It's easy and free to post your thinking on any topic and connect with other readers.</p>
            </div>
            <div className="bodee" >
             <Sidebar/>
             <Content posts={posts} />
            </div>
        
          </div>
         </div>)}

         {(!loggedIn) && <Notloggedin/>}

        </>

      )
  }

export default Home;
