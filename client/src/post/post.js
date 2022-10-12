import './post.css';


const Post = (props) =>{
   
  
  
    
    let date=props.post.createdAt[8]*10+Number(props.post.createdAt[9])
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]
    let month = months[props.post.createdAt[5]*10+Number(props.post.createdAt[6])-1]
    let year= Number(props.post.createdAt[0])*1000+ Number(props.post.createdAt[1])*100+ Number(props.post.createdAt[2])*10+Number(props.post.createdAt[3])
    

    return (
      <div className="post" >

        <img className="post-image" src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
        
        

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