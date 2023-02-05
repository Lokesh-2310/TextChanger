import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar'
import TextForm from './Components/TextForm'
import React,{useState} from 'react';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        'message':message,
        'type':type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const[mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert(" Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light mode has been enabled","success")
    }
  }

  
  return (
    <>
    <Router>
   <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3" >
    <Routes>
    <Route path='/about' element={<About mode={mode}/>} />
    <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
    </Routes>
   </div>
   </Router>
    </>
  );
}

export default App;
