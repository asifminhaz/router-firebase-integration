import React from 'react';

const Register = () => {
          return (
      <div>
       <h3>Please Register Now</h3>  
       <form>
               <input type="text" placeholder="Your Name"></input>
                 <br></br>
              <input type="email" placeholder="Your Email"></input>
                <br></br>
                <input type="password" placeholder='password'></input>
                <br></br>
                <input type="submit" value='Register'></input>
          </form>  
     </div>
          );
};

export default Register;