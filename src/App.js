
import { useState } from 'react';
import './App.css';
// import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  // const  [alert,setAlert] = useState('')

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     message:message,
  //     type:type
  //   })
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      // showAlert("Dark mode","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // showAlert("Ligth mode","success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert}/> */}
        <div className="container my-3">

          <Routes>
            <Route exact path='/about' element={<About />} />


            <Route exact path='/' element={<TextForm heading="Enter Text" />} />

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
