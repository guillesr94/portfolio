import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Form from '../Components/Form/form'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import "../assets/css/style-liberty.css";

function Contact() {
  return (
    <>
    <div className="banner-navbar-container no-adjust">
      <Navbar />
      <Banner title="Contacto" showDynamicText={false} isHomePage={false} />
    </div>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact