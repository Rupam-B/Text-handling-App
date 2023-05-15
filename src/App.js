import React, {useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Sidebar from './components/Sidebar';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light')
  const [Text , setText] = useState('dark')
  const [switchText , setswitchText] = useState('dark')
  const [alert , setAlert] = useState(null)
  const showAlert = (message , type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark')
      setText('light')
      setswitchText('light')
      document.body.style.backgroundColor = '#2b2b2c'
      showAlert('Dark Mode enabled', 'success')
    }
    else  {
      setMode('light')
      setText('dark')
      setswitchText('dark')
      document.body.style.backgroundColor = 'white'
      showAlert('Lite Mode enabled', 'success')
    }

  }
  return (
    <>
    {/* <Router> */}

   <Navbar MainTitle="Rupam's Text Handle App" switchText={switchText} mode={mode} Text={Text} toggleMode={toggleMode} aboutText='About Us'/>
   <Alert alert ={alert}/>
   <div className="my-3"></div>
   {/* <Routes> */}
          {/* <Route exact path="/about" element = {<About />}/> */}
            
          {/* <Route exact path="/" element ={}/>  */}

          <TextForm showAlert ={showAlert} switchText={switchText} mode={mode}  Text={Text} toggleMode={toggleMode} heading="Convert Text to Capital / Small Letters"/>     
    {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
