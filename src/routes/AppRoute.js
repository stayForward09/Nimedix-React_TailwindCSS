import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../pages/app/Home'
import Services from '../pages/app/Services'
import OurToken from '../pages/app/OurToken'
import About from '../pages/app/About'
import ComingSoon from '../pages/ComingSoon'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ComingSoon />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="our-token" element={<OurToken />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ComingSoon />} />
          <Route path="login" element={<ComingSoon />} />
          <Route path="signup" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
