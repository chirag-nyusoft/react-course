import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Please enter to changing a Text');

  const handleOnChange = (e) =>{
    setText(e.target.value);
  }

  const handleCopyText = () => {
    let myText = document.getElementById('textword');
    if(myText !== ''){
      myText.select();
      navigator.clipboard.writeText(myText.value);
      document.getSelection().removeAllRanges();
      props.alert('Text Copied..!!', 'success');
    }
    else{
      props.alert('Text Missing..!!', 'danger');
    }
  }

  const handleUpCase = (param) => {
    var newText = '';
    
    switch(param) {
      case 'upper':
        newText = text.toUpperCase();
        props.alert('Converted to UpperCase', 'success');
        break;

      case 'lower':
        newText = text.toLowerCase();
        props.alert('Converted to LowerCase', 'success');
        break;

      case 'clear':
        newText = '';
        props.alert('All Text Clered!', 'warning');
        break;

      case 'spaces':
        let myText = text.split(/[  ]+/);
        newText = myText.join(" ");
        props.alert('Extra spaces are removed!!', 'warning');
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
      <button disabled={text.length===0} className="btn btn-primary" onClick={() => handleUpCase('upper') }>UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={() => handleUpCase('lower') }>LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={() => handleUpCase('clear') }>Clear</button>      
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={() => handleCopyText() }>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={() => handleUpCase('spaces') }>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <p>Total length of char is:: <span> { text !== '' ? text.length : 0 } </span></p>
      <p>Total words Are:: <span> { text !== '' ? text.split(' ').filter((element)=>{ return element.length !== 0 }).length : 0 } </span></p>
      <p>Reading time: <span> { text !== '' ? 0.008 * text.split(' ').filter((element)=>{ return element.length !== 0 }).length : 0 } min... </span></p>
      <p>Total vowels Are:: <span> { text !== '' ? text.match(/[aeiou]/gi).length : 0  } </span> </p>
    </div>
    </>
  )
}
