// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null) ,2500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Darkmode is active.', 'dark');
      document.title = 'TextUtils - Dark Mode';
      // chnage the runtime title to highlight user - but not good for better UI 
      /* setInterval(()=>{
        document.title = "Dark Mode Activated..!!"
      }, 2500);
      setInterval(()=>{
        document.title = "Dark Mode Alert Activated..!!"
      }, 1500); */

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Lightmode is active.', 'success');
      document.title = 'TextUtils - Light Mode';
      
    }
  }

  const mainMenu = {
    menu1:{
      label: 'Home',
      url:  '/'
    },
    menu2:{
      label: 'About',
      url:  '/about'
    },
    menu3:{
      label: 'Products',
      url:  '/shop',
      submenu: {
        submenu1:{
          label: 'SubMenu One',
          url: '',
        },
        submenu2:{
          label: 'SubMenu Two',
          url: '',
        },
        submenu3:{
          label: 'SubMenu Three',
          url: '',
        },
        submenu4:{
          label: 'SubMenu Four',
          url: '',
        }
      }
    }    
  }

  const navbar = {
    title: 'TextUtils',
    mode: mode,
    toggleMode: toggleMode,
    menus: mainMenu
  };
  
  return (
    <>
      <Router>
          {/* <Navbar /> */}
          <Navbar title={navbar.title} mode={navbar.mode} toggleMode={navbar.toggleMode} menus={navbar.menus} />
          {/* display alert here */}
          <Alert alert={alert} /> 
          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<TextForm alert={showAlert} heading="Enter the analyze text:" mode={mode}/>} />
            </Routes>              
          </div>       
      </Router>
    </>
  );
}

export default App;