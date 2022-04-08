import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
          const {signInWithGoogle} = useFirebase();
          return (
          <div>
           <h3>please log in</h3>
           <div style={{margin:"20px"}}>
           <button onClick={signInWithGoogle}>Google Sign In</button>
           </div>
            <form>
              <input type="email" placeholder="Your Email"></input>
                <br></br>
                <input type="password" placeholder='password'></input>
                <br></br>
                <input type="submit" value='Login'></input>
          </form>  
           </div>
     );
};

export default Login;