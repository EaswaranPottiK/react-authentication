
import { auth , googleProvider} from "./firebase";
import {signInWithPopup,signInWithEmailAndPassword,getAuth} from "firebase/auth";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessTocken] = useState("")

  let navigate = useNavigate();
  

  function signIn(){
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAccessTocken(user.accessToken)
    
    navigate("/LoginSuccessful")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
  }

  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };

  return (
    <>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column', border:'1px solid grey',width:'30vw',marginLeft:'35vw',marginTop:'10vh', borderRadius:'6px'}}>
        <p style={{fontSize:'2rem',fontWeight:'500'}}>Sign In</p><br></br>
        
        <p>Email Id</p>
        <input onChange={(e) => setEmail(e.target.value)} /><br></br>

        <p>Password</p>
        <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
        /><br></br>

        
        <button onClick={signIn}> Sign In</button><br></br>
        <button onClick={signInWithGoogle}> Signin with google</button><br></br>
    </div>

    <div>
      <br></br>
      <p style={{textAlign:'center',fontSize:'2rem'}}>Hi you can use geekster@gmail.com as username and password to login</p>
    </div>
    
    </>
  );
};