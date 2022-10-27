import './comment.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Comment = (props) =>{

 return (
    <div className="main-comment-box">
      
       <div className='comment-circle'>
         {props.comment.name.toUpperCase()[0]}
       </div>

       <div className ='comment-content'>

          <div className='comment-content-top'>
            <bold>{props.comment.name}</bold>
          </div>

          <div className = 'comment-content-bottom'>
            {props.comment.comment}
          </div>

          <div className = 'comment-like'>
            <ThumbUpIcon/>
            <ThumbDownIcon/>
          </div>

       </div>

    </div>
 )
}

export default Comment;
