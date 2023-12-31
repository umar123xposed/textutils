import "./App.css"
import Navbar from "./Navbar"
import Text from './Text'
import About from './assets/About'
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [toggle, settoggle] = useState("Dark mode")

const dark =()=>{
  if(toggle==="Dark mode"){
  settoggle("Light mode");
  const textarea = document.getElementById("floatingTextarea2");
  textarea.style.color = "white";
  textarea.style.backgroundColor = "#444444"  
  document.body.style.color = "white";
  document.body.style.backgroundColor = "#1c1c1c"
  }else{
    settoggle("Dark mode");
    const textarea = document.getElementById("floatingTextarea2");
    textarea.style.color = "black";
  textarea.style.backgroundColor = "white" 
  document.body.style.color = "black";
  document.body.style.backgroundColor = "#f7f6f6"
  }
  
}
const [text, setText] = useState("Enter text here.")

const changing = e =>{
    setText(e.target.value)
}
const uppercase=()=>{
setText(text.toUpperCase());
}
const lowercase=()=>{
    setText(text.toLowerCase());
    }
const extraspace=()=>{
  setText(text.replace(/\s+/g, ' ').trim())
}
  return (
    <Router>
    
      <Navbar dark={dark} toggle={toggle} name="TextToolify"/>
      
      <div className="container my-5">
      <Routes>
        <Route path="" element={<Text text={text} changing={changing} lowercase={lowercase} uppercase={uppercase} extraspace={extraspace}/>}> 
        
        </Route></Routes>
        </div>
       

      <Routes>
        <Route path="/about" element={<About/>}>
          </Route></Routes>     
    
    </Router>
  )
}

export default App;
