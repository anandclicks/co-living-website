import { useState } from 'react'
import './App.css'
import './responsvie.css'
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
import { Route, Router, Routes } from 'react-router-dom'
import Noida from './components/Noida/Noida'
import Pgsuggestion from './components/Home/Pgsuggestion'
import NavbarTwo from './components/Navbar/NavbarTwo'
import OtoBloomPage from './components/NoidaPgPages/OtoBloomPage'
import OtoCapitalPage from './components/NoidaPgPages/OtoCapitalPage'
import OtoExpoPremiumPage from './components/NoidaPgPages/OtoExpoPremiumPage'
import OtoExresswayPage from './components/NoidaPgPages/OtoExresswayPage'
import OtoOmegatOwnshipPage from './components/NoidaPgPages/OtoOmegatOwnshipPage'
import OtoroRaltownPage from './components/NoidaPgPages/OtoroRaltownPage'
import OtoRoyalWinPage from './components/NoidaPgPages/OtoRoyalWinPage'
import OtoScoutHousePage from './components/NoidaPgPages/OtoScoutHousePage'






function App() {
  return (
    <div className='mw'>
   {/* font awsome cdn  */}
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
   {/* remix icon cdn  */}
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" referrerPolicy="no-referrer" />
   {/* other components  */}
   {/* navbar  */}
   <Routes>
    <Route index path='/' element={<><Navbar/><Home/> <SectionOne/><SectionTwo/> <SectionThird/><SectionForth/><Pgsuggestion/></>}/>
    <Route path='/Noida' element={<><Noida/></>} />
    <Route path='/noida/otobloom' element={<><NavbarTwo/><OtoBloomPage/></>}/>
    <Route path='/noida/otocapital' element={<><NavbarTwo/><OtoCapitalPage/></>}/>
    <Route path='/noida/otoExpoPremium' element={<><NavbarTwo/><OtoExpoPremiumPage/></>}/>
    <Route path='/noida/otoexpressway' element={<><NavbarTwo/><OtoExresswayPage/></>}/>
    <Route path='/noida/otoomegatownship' element={<><NavbarTwo/><OtoOmegatOwnshipPage/></>}/>
    <Route path='/noida/otoroyaltown' element={<><NavbarTwo/><OtoroRaltownPage/></>}/>
    <Route path='/noida/otoroyalwin' element={<><NavbarTwo/><OtoRoyalWinPage/></>}/>
    <Route path='/noida/otoscouthouse' element={<><NavbarTwo/><OtoScoutHousePage/></>} />

   </Routes>
   <Semifooter/>
  
    </div>
  )
}

export default App
