/* //Imports
var jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET = '0s52fdd25g2dgfhd5ghg644gdfsfg78f7ffd54'

// Exported function
module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin:userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
           expiresIn: '1h'     
        })
    },
    parseAuthorization: function(authorization){
        return (authorization != null) ? authorization.replace('Bearer',''):null;
    },
    getUserId: function(authorization){
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization)
     if(token != null){
         try{
             var jwtToken = jwt.verify(token, JWT_SIGN_SECRET)
         if(jwtToken != null)
         userId = jwtToken.userId;
            }catch(err){}
     }  
     return userId; 
    }
    
}
 */
//* / Imports
/* var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'dfjnfdf54tdh4thcnkdgth5876fvgrehth5794grehfzfjeo5795ri5t7hhthedhf465';

// Exported functions
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  },
  parseAuthorization: function(authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  },
  getUserId: function(authorization) {
    var userId = -1;
    var token = module.exports.parseAuthorization(authorization);
    if(token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if(jwtToken != null)
          userId = jwtToken.userId;
      } catch(err) { }
    }
    return userId;
  }
}  */



/*autre*/

//Imports
var jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET = '0s52fdd25g2dgfhd5ghg644gdfsddhjyi47875fg78f7ffd54jhgjkoj544h'

// Exported function
module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin:userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
           expiresIn: '1h'     
        })
    },
    parseAuthorization: function(authorization){
        return (authorization != null) ? authorization.replace('Bearer',''):null;
    },
    getUserId: function(authorization){
        var userId =userId;
        var token = module.exports.parseAuthorization(authorization)
     if(token != null){
         try{
             var jwtToken = jwt.verify(token, JWT_SIGN_SECRET)
         if(jwtToken != null)
         userId = jwtToken.userId;
            }catch(err){}
     }  
     return userId; 
    }
    
}
