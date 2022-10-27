import './post.css';


const Post = (props) =>{
   
  
  
    
    let date=props.post.createdAt[8]*10+Number(props.post.createdAt[9])
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]
    let month = months[props.post.createdAt[5]*10+Number(props.post.createdAt[6])-1]
    let year= Number(props.post.createdAt[0])*1000+ Number(props.post.createdAt[1])*100+ Number(props.post.createdAt[2])*10+Number(props.post.createdAt[3])
    

    return (
      <div className="post" >

        <img className="post-image" src="https://t4.ftcdn.net/jpg/03/13/59/85/240_F_313598508_lmidSvyRGBvVrYr3Fn6db1OMBPTMvISW.jpg" />
        
        

       <div className="post-info" >
          <div className="posttitle" >{props.post.title}</div>

          <div className="post-catgs" >
            <div className="postcat">{props.post.username}</div>
            <div className="postcat">{date}th {month} {year}</div>
          </div>
         
         <p className="postdes" >{props.post.description}</p>
       </div>

      </div>
    )
}

export default Post;