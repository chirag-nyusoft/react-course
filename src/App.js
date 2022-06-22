// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
      <>
        {/* <Navbar /> */}
        <Navbar title="TextUtils" menu1="Home" menu2="About" menu3="Products" />
        <div className="container">
          <TextForm heading="Enter the analyze text:" />
       </div>
       <hr />
       <About />
      </>
  );
}

export default App;
