

import Home from "./Pages/Home"
import About from "./Pages/MoreAbout"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
