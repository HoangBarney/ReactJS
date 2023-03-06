import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Creme from './components/Creme'
import Cake from './components/Cake'
import Cookies from './components/Cookies'
import Tiramisu from './components/Tiramisu'
import Cheesecake from './components/Cheesecake'
import Roll from './components/Roll.js'
import StickyRice from'./components/StickyRice.js'
import ApplePie from'./components/ApplePie.js'
import Baklava from'./components/Baklava.js'
import { Route, Routes, Link } from 'react-router-dom'
import logo from './images/Homemade Recipe.jpg'
function App () {
 
  return (
    <>
    <nav class="navbar">
    <img src={logo} className="logo" alt="" width="110px" height="95px" />
     <div class="nav-links">
     <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </div>
      </nav>
   <Routes>
  <Route exact path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/creme' element={<Creme />} />
  <Route path='/cake' element={<Cake />} />
  <Route path='/cookies' element={<Cookies />} />
  <Route path='/tiramisu' element={<Tiramisu />} />
  <Route path='/cheesecake' element={<Cheesecake />} />
  <Route path='/roll' element={<Roll />} />
  <Route path='/sticky' element={<StickyRice />} />
  <Route path='/pie' element={<ApplePie />} />
  <Route path='/baklava' element={<Baklava />} />
  </Routes>
  </>
    )
  }

export default App
