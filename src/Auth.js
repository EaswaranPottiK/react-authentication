
import { auth , googleProvider} from "./firebase";
import {signInWithPopup,signInWithEmailAndPassword,getAuth,GoogleAuthProvider} from "firebase/auth";
import { useState } from "react";
import './App.css';

export const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function signIn(){
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //login is successful
    props.setAccessTocken(userCredential._tokenResponse.idToken)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
  }

  const signInWithGoogle = async () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        props.setAccessTocken(token)
      }).catch((error) => {
        const errorCode = error.code;
      });
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