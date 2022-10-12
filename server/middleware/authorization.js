 const jwt = require('jsonwebtoken')
 
 
 const authorization = async function (req,res,next) {
  try{
    token=req.cookies.acesstoken;
    if(!token)
    {res.status(401).json({message : "Unauthorized no token"})}
    const verified = jwt.verify(token,"secret-password");
    req.user_id = verified.id;
    next();
   }
  catch(err){
    res.status(401).json({message : "Unauthorized error"})
  }
}

module.exports = authorization;