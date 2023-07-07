import './App.css';
import Navbar from './Components/Navbar.jsx';
import Form from './Components/Form';
import React, { useState } from 'react';
import Alert from './Components/Alert'
function App() {
  const [mode,setmode]=useState("dark")
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({msg:message,type:type})
  }
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="grey"
      showalert("Dark mode has been enabled","Success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("Light mode has been enabled","Success")
    }
  }
  return (<div className="App">
    
      <Navbar mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Form head="First Name:" title="Koi page hoga"/>
    </div>
  );
}


export default App;
