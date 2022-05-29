import { Route, Routes } from 'react-router-dom';
import Home  from './components/Home/Home';
import React from 'react';
import About from './components/About/About';
import Stories from './components/Stories/Stories';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Booktable from './components/Booktable/Booktable';
import Notfound from './components/Notfound/Notfound';


import './App.css';

export default function App() {

  
  return (
  <>
  <Navbar/>
  <div >

    {/* route of pathes */}
      <Routes>
      {/* <Route path='home' element={<Home/>}/> */}
    
        <Route path='about' element={<About/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='stories' element={<Stories/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='booktable' element={<Booktable/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
        </Routes>
    </div>
    </>
  );}


