import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SectionOne from './components/Hero section/SectionOne'
import SectionTwo from './components/Hero section/SectionTwo'
import SectionThird from './components/Hero section/SectionThird'
import SectionForth from './components/Hero section/SectionForth'
import SectionFifth from './components/Hero section/SectionFifth'
import Semifooter from './components/Hero section/Semifooter'
import Footer from './components/Footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Noida from './components/Noida/Noida'




function App() {
  return (
    <>
   {/* font awsome cdn  */}
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
   {/* remix icon cdn  */}
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" referrerPolicy="no-referrer" />
   {/* other components  */}
   {/* navbar  */}
   <Routes>
    <Route index path='/' element={<><Navbar/><Home/> <SectionOne/><SectionTwo/> <SectionThird/><SectionForth/></>}/>
    <Route path='/Noida' element={<><Noida/></>} />
   </Routes>
   <Semifooter/>
  
    </>
  )
}

export default App
