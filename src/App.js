import React from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  
  return (
    <div>
        <Toaster />
        <Navbar />
        <div className='bg-container'>
          <div className='gradient-container'>
            <Main />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
    </div>
  )
}

export default App