import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OtpLogin from './Contact/LoginWithOTP/OtpLogin'
import Layout from './Layout/Layout'
import MenuBar from './components/SearchBar/MenuBar'
import Searchbar from './components/SearchBar/Searchbar'
import Home from "./pages/Home"
import { DrawerBag } from './components/bag/Drawer'
import { Provider } from 'react-redux'
import store from './components/bag/store'
import Wishlist from './components/SearchBar/Wishlist'
import Newarrivals from './components/menuComponent/new-Arrivals/Newarrivals'

function App() {

  useEffect(() => {
    Aos.init();
  })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='searchbar' element={<Searchbar />} />
          <Route path='menupage' element={<MenuBar />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<OtpLogin />} />
            <Route path='bag' element={<DrawerBag />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='arrivals' element={<Newarrivals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App