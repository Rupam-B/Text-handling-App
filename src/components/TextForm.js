import React, { useState } from 'react';

export default function TextForm(props) {
    const handleChange=(event)=>{
        console.log("on change clicked");
        setText(event.target.value)
        
    }
    const handleClick=()=>{
        console.log("UpperCasing clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to Capital Letters', 'success')
        
    }
    const handlednClick=()=>{
        console.log("LowerCasing clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to Small Letters', 'success')
        
    }
    const nullText=()=>{
        setText("");
        props.showAlert('Text Area Cleared', 'success')
        
    }
    const copyText = ()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied to clipboard', 'success')

    }
    const [text, setText] = useState("Enter text here");
    return (
        <div className={`container bg-${props.mode} `}>
            <h1 className={`text-${props.Text}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className={`form-control" container bg-${props.mode} text-${props.Text}`} value={text}  onChange={handleChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Click for Capital Letters</button>
            <button className="btn btn-primary mx-4" onClick={handlednClick}>Click for Small Letters</button>
            <button className="btn btn-primary" onClick={nullText}>Clear Text</button>
            <button className="btn btn-primary mx-4" onClick={copyText} >Copy Text</button>
        <div className="container my-8">
            <h3 className={`text-${props.Text}`}>Your Text summary</h3>
            <p className={`text-${props.Text }`}>your text has <b className='fs-45'>{text.split(" ").length}</b> words and <b>{text.length}</b> charecters</p>
            <h3 className={`text-${props.Text }`}>Preview</h3>
            <p className={`text-${props.Text} my-20`}>{text}</p>
        </div>
        </div>
    )
}
