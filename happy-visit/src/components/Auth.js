import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Auth = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // let history = useHistory();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Click here to Enter!!!</button>
    ) 
  )
};

export default Auth;
