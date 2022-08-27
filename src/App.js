import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import { useState } from 'react';
import React  from 'react';
import './App.css';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  // dark mode button
  const [mode, setMode] = useState('light');
  // it implies whether dark mode is enabled or not

  // alert message
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  }

  // toggle (dark mode button)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22303c';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils - Dark';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#171717';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Home';
    }
  }
  // second toggle mode
  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('secondary');
      document.body.style.backgroundColor = '#343A40';
      document.body.style.color = 'whitesmoke';
      showAlert('Gray Mode has been enabled', 'success');
      document.title = 'TextUtils - Gray';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#171717';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Home';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About-us" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about"
            element={<About />}>
            </Route>
            <Route exact path="/"
              element={<Textform heading="Enter the text to analyze:" mode={mode} showAlert={showAlert}  buttonText="UpperCase" buttonText2="LowerCase" buttonText3="Trim Spaces" buttonText4="Clear Text" toggleMode={toggleMode}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );

}
export default App;
