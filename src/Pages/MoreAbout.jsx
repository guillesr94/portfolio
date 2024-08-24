import React from 'react'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import MoreAboutMe from '../Components/MoreAboutMe/MoreAboutMe'
import "../assets/css/style-liberty.css";

function MoreAbout() {
  return (
    <>
    <div className="banner-navbar-container no-adjust">
      <Navbar />
      <Banner title="Acerca de mi" showDynamicText={false} isHomePage={false} />
    </div>
    <About></About>
    <MoreAboutMe></MoreAboutMe>
    <Footer></Footer>
    </>
  )
}

export default MoreAbout