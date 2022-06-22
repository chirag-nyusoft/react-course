import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Please enter to changing a Text');

  const handleOnChange = (e) =>{
      setText(e.target.value);
  }

  const handleUpCase = (param) => {
    var newText = '';
    
    switch(param) {
      case 'upper':
        newText = text.toUpperCase();
        break;

      case 'lower':
        newText = text.toLowerCase();
        break;

      default:
          break;
      }
      setText(newText);
  }

  return (
    <>
    <div className="container">
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textword" rows="8" cols="8" />
      </div>
      <button className="btn btn-primary" onClick={() => handleUpCase('upper') }>UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={() => handleUpCase('lower') }>LowerCase</button>
    </div>
    <div className="container my-3">
      <p>Total length of char is:: <span> {text.length} </span></p>
      <p>Total words Are:: <span> { text.split(' ').length } </span></p>
      <p>Reading time: <span> { 0.008 * text.split(' ').length } min... </span></p>
    </div>
    </>
  )
}
