import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Contact from './Contact';
import About from './About';
import Search from './Search';

function App() {
  return (
    <>
     
     <div className="App overflow-auto">
      <React.StrictMode>
        <Router>
        <Header></Header>
        <br/>
          <Routes>
            <Route path="/" exact element={<Search/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/contact" exact element={<Contact/>} />
            
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
    
    </>
   
  );
}

export default App;
