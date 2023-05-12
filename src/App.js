import React, {useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Sidebar from './components/Sidebar';


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
   <Navbar MainTitle="Rupam's Text Handle App" switchText={switchText} mode={mode} Text={Text} toggleMode={toggleMode} aboutText='About Us'/>
   <Alert alert ={alert}/>
   <div className="my-3"></div>
   <TextForm showAlert ={showAlert} switchText={switchText} mode={mode}  Text={Text} toggleMode={toggleMode} heading="Convert Text to Upper / Lower Case"/>
   {/* <About/> */}
    </>
  );
}

export default App;
