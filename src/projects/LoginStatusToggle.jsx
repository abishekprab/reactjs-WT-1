import { useState, Fragment } from 'react';
import '../App.css';

function LoginStatusToggle() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => setLoggedIn(!loggedIn);

  return (
    <Fragment>
      <h2>Login Status</h2>
      <button onClick={toggleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
      <p>{loggedIn ? 'Welcome back!' : 'Please login'}</p>
    </Fragment>
  );
}

export default LoginStatusToggle;