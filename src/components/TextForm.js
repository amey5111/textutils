import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {
  const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText) ; 
        props.manageAlert("converted to lower Case","success") ; 
    }
  const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText) ; 
        props.manageAlert("converted to upper case","success") ; 
    }
  const  handleCopyyClick= ()=>{
        var text = document.getElementById("myBox")
        text.select() ; 
        navigator.clipboard.writeText(text.value) ; 
        props.manageAlert("Text is copied to clipboad","success")
    }
  const  handleExtraSClick= ()=>{
        let newText = text.split(/[ ]+/) ; 
        setText(newText.join(" ")) ; 
        props.manageAlert("Exta Spaces are removed","success") ; 
    }
    const handlecClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = "";
        setText(newText) ; 
        props.manageAlert("text was cleared","success") ; 
    }
  

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value) ; 
    }

    const [text, setText] = useState('Enter text here2'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
    <div> 
            <h1 style={{color: props.mode==='light'?'black':'blue'}}>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleCopyyClick}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSClick}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-3" onClick={handlecClick}>clear</button>
            
            
        </div>
        <div className="container my-3">
            <h2 style={{color: props.mode==='light'?'black':'blue'}}>Your text summary</h2>
            <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{color: props.mode==='light'?'black':'white'}}>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2 style={{color: props.mode==='light'?'black':'blue'}}>Preview</h2>
            <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Enter the text in above given text box to preview it "}</p>
            <ul>
              <li className='my-3'>
                <h5 style={{color: props.mode==='light'?'black':'blue'}}><u> Bold text will be displayed bellow</u></h5>
                <b style={{color: props.mode==='light'?'black':'white'}}>{text}</b>
              </li>
              <li className='my-3'>
                <h5 style={{color: props.mode==='light'?'black':'blue'}}><u> Italic text will be displayed bellow</u></h5>
                <i style={{color: props.mode==='light'?'black':'white'}}>{text}</i>
              </li>
              <li className='my-3'>
                <h5 style={{color: props.mode==='light'?'black':'blue'}}><u>underlined text will be displayed bellow</u></h5>
                <u style={{color: props.mode==='light'?'black':'white'}}>{text}</u>
              </li>
            </ul>
        </div>
        </>
  )
}


