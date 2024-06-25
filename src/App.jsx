import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from "./pages/Home"
import OtpLogin from './Contact/LoginWithOTP/OtpLogin'
import Searchbar from './components/SearchBar/Searchbar'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='searchbar' element={<Searchbar />} />
        <Route path='login' element={<OtpLogin />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App