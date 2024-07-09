import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OtpLogin from './Contact/LoginWithOTP/OtpLogin'
import Layout from './Layout/Layout'
import Searchbar from './components/SearchBar/Searchbar'
import Home from "./pages/Home"
import MenuBar from './components/SearchBar/MenuBar'

function App() {

  useEffect(() => {
    Aos.init();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='searchbar' element={<Searchbar />} />
        <Route path='menupage' element={<MenuBar />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<OtpLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App