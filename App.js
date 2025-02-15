import React from 'react'
import Home from './comp/home'
import Contact from './comp/contact'
import About from './comp/about'
import Error from './comp/error'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route,Link}from 'react-router-dom';
{
  //the following line can be include in your src/index.js or App.js file

}

function App() {
  return (
    <Router>
   <div>
    <h1>Hi sehrish</h1>
    <Link to={'/'} >Home</Link>
    <Link to={'/About'} >About</Link>
    <Link to={'/Contact'} >contact</Link>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error/>}/>
    </Routes>
   </div>
   </Router>
  );
}

export default App;
