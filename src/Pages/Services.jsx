import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner';
import ServiceCard from '../Components/ServiceCard/ServiceCard'
import { ReactComponent as GridIcon } from '../assets/iconos/buromobelexperte-brands-solid.svg';

import { ReactComponent as BoardIcon } from '../assets/iconos/chalkboard-solid.svg';
import Footer from '../Components/Footer/Footer'

function Services() {
  return (
    <>
    <div className="banner-navbar-container no-adjust">
      <Navbar />
      <Banner title="Servicios" />
    </div>
    <section className='section'>
      <div className='container'>
    <ServiceCard
          Icon={BoardIcon} 
          serviceName="Desarrollo Web"
          description="Transforma tu visión en una página web simple y efectiva. Ofrezco un diseño web que se adapta a tus necesidades y a todos los dispositivos, garantizando una experiencia de usuario fluida y profesional."
          />
        <ServiceCard
          Icon={GridIcon} 
          serviceName="Diseño Responsive"
          description="Tu sitio web se verá increíble en cualquier dispositivo, desde teléfonos móviles hasta computadoras de escritorio. Me especializo en diseño responsive para asegurar que tu página funcione perfectamente en todas las pantallas."
          />
          </div>
    </section>
    <Footer/>
    </>
  )
}

export default Services