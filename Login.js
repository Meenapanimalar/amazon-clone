import React from 'react';
import "./Login.css";
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';


function Login() {
    const navigate = useNavigate();  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
      e.preventDefault();
      
      auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
    }
     const registerUser = e =>{
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
          console.log(auth);
          if(auth){
            navigate('/');
          }
        })
        .catch(error => alert(error.message));
        



      //do some fancy firebase registration shittt......
    }
  return (
    

  
    <div className='login'>
       
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon_logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
           <h5>E-mail</h5> <input type="text"  value={email} onChange={e =>  setEmail(e.target.value)}/>
           <h5>Password</h5> <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
             <button className='login__signInButton' type='submit' onClick={signIn}>Sign in</button>
        </form>
         
       
         <p>By agreeing, you accept our Terms of Service and Privacy Policy of Amazon-clone fake .</p>
         <button className='login__registerButton' type='submit' onClick={registerUser}>Create your Amazon account</button>

      </div>
    </div>
  );
}

export default Login;
