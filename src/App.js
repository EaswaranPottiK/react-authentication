import './App.css';
import { Auth } from './Auth';
import React,{ useState } from 'react';
import LoginSuccessful from './LoginSuccessful';

function App() {
  const [accessToken, setAccessTocken] = useState('')
  if (accessToken ===''){
    return(<Auth setAccessTocken={setAccessTocken}/>)
  }
  else {
    return(<LoginSuccessful accessToken={accessToken}/>)
  }
}

export default App;
