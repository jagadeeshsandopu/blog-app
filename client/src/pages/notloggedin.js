import './notloggedin.css'
import LockIcon from '@mui/icons-material/Lock';
import {Link} from 'react-router-dom'

const Notloggedin = () =>{

    return (
      <div className = "notlogged">
         <div className="text">
          Login or Register
         </div>
         <LockIcon style={{fontSize:"40vh"}} />
         <div className="links"><Link to='/login' style={{textDecoration:"none",color:"black"}}>Login</Link></div>
         <div className="links"><Link to='/register' style={{textDecoration:"none",color:"black"}}>Register</Link></div>
      </div>
    )

}

export default Notloggedin;
