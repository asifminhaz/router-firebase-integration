import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {
          const [user] = useAuthState(auth)
          return (
                    <div>
                           <h2>Knock knock </h2> 
                           <h4>{user? user.displayName : "nobody"}</h4>  
                    </div>
          );
};

export default Products;