import Navbar from './Components/Navbar';
import './App.css';
import React, { useState } from 'react';
import Form from './Components/Layout';
import Alert from './Components/Alert';

function App() {
  const [mode, setmode]=useState('light')
  const [alert, setalert] = useState(null);
  const showalert=(message, type)=>{
    setalert({message: message, type:type})
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      showalert("Dark Mode Enabled","success")
    }
    else{
      setmode('light')
      showalert("Light Mode Enabled","success")
    }
  }
  return (
    <div className="App">
      
      <Navbar mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <br/>
      <Form/>
    </div>
  );
}

export default App;
