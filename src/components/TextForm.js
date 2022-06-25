import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Please enter to changing a Text');

  const handleOnChange = (e) =>{
    setText(e.target.value);
  }

  const handleCopyText = () => {
    let myText = document.getElementById('textword');
    myText.select();
    navigator.clipboard.writeText(myText.value);
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

      case 'clear':
        newText = '';
        break;

      case 'spaces':
        let myText = text.split(/[  ]+/);
        newText = myText.join(" ");
        break;

      default:
          break;
      }
      setText(newText);
  }

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textword" rows="8" cols="8" style={{backgroundColor: props.mode === 'light' ? '#042743' : 'white', color: props.mode === 'light' ? 'white' : '#042743' }} />
      </div>
      <button className="btn btn-primary" onClick={() => handleUpCase('upper') }>UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={() => handleUpCase('lower') }>LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={() => handleUpCase('clear') }>Clear</button>      
      <button className="btn btn-primary mx-2" onClick={() => handleCopyText() }>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={() => handleUpCase('spaces') }>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <p>Total length of char is:: <span> { text !== '' ? text.length : 0 } </span></p>
      <p>Total words Are:: <span> { text !== '' ? text.split(' ').length : 0 } </span></p>
      <p>Reading time: <span> { text !== '' ? 0.008 * text.split(' ').length : 0 } min... </span></p>
      <p>Total vowels Are:: <span> { text !== '' ? text.match(/[aeiou]/gi).length : 0  } </span> </p>
    </div>
    </>
  )
}
