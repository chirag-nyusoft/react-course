// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
      <>
        {/* <Navbar /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} menu1="Home" menu2="About" menu3="Products" />
        <div className="container my-3">
          <TextForm heading="Enter the analyze text:" mode={mode}/>
       </div>
       <hr />
       <About />
      </>
  );
}

export default App;
