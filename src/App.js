import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Link , 
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null);
  const manageAlert=(message,type) =>{
    setalert({msg: message ,  
            type: type
          }
          )
          setTimeout(() => {
            manageAlert(null)
          },2500);
  
  }
   const [mode, setMode] = useState('light');
   const toggleMode = () =>{
  if(mode==='dark'){
    setMode('light') ; 
    document.body.style.background = 'white' ; 
    document.getElementById("myBox").style.backgroundColor = "white" ; 
    document.getElementById("myBox").style.color = "black" ; 
    manageAlert("light mode is enabled","success") ; 
    document.title = "textutils | light mode" ; 
  }

  else{
    setMode('dark') ; 
    document.body.style.background = 'black' ; 
    document.getElementById("myBox").style.backgroundColor = "#001a33" ; 
    document.getElementById("myBox").style.color = "white" ; 
    manageAlert("Dark mode is enabled","success") ; 
    document.title = "textutils | dark mode" ; 

  }
}
  return (
    
    <>
    <Router>
    <Navbar title="textUtilS" about_text="About" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container" my-3>
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter text to analyze bellow" manageAlert={manageAlert} mode={mode}/>
          </Route>
    </Switch>
    </div>
        </Router>
    </>
    
  );
}

export default App;