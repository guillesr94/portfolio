import React from 'react'
import "../About/About.css"
import meWithCircle from "../../assets/images/Me-with-circle.png"
import { ReactComponent as InstaIcon } from '../../assets/iconos/instagram-brands-solid.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/iconos/linkedin-in-brands-solid.svg';


function About() {
  return (
    <>
    <section className='section'>
      <div className='container'>
      <div className="columns is-vcentered ">
        <div className="column">
        <div className="about-image">
            <img src={meWithCircle} alt="About" className="img-fluid" />
          </div>
        </div>
        <div className="column has-text-black">
        <h3 className="title title-brown">Programador de Páginas Web</h3>
            <p >
              Me apasiona la creación de páginas web. Puedo ofrecerte una solución digital innovadora que hará despegar tu negocio. ¡Contáctame y hablamos sobre cómo llevar tus proyectos al siguiente nivel!
              
            </p>
            <div className="personal-info">
              <p className='has-text-black'><strong className='brown-dark-text'>Nombre:</strong> Suarez Reinoso Guillermo</p>
              <p className='has-text-black'><strong className='brown-dark-text'>Email:</strong> <a href="">dev.guillesr@gmail.com</a></p>
            </div>
            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/suarezreinosoguillermo/" target="_blank">
                <LinkedinIcon className="social-icon  icono-instagram"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dev.guillesr/" target="_blank" >
                  <InstaIcon className="social-icon  icono-instagram"/>
                </a>
            </li>
            </ul>
            
            
            <div className="action-buttons is-flex is-justify-content-flex-start">
              <a href="contact.html" className="btn btn-primary mx2">Contrátame</a>
              <a href="#download-cv" className="btn btn-primary mx-2">Descargar CV</a>
        </div>
        </div>
      </div>
      </div>
    </section>
  
    {/* <section className="about-section">
      <div className="container">
        <div className="content">
          <div className="about-image">
            <img src={meWithCircle} alt="About" className="img-fluid" />
          </div>
          <div className="about-info">
            <h3 className="title-main">Programador de Páginas Web</h3>
            <p>
              Me apasiona la creación de páginas web. Puedo ofrecerte una solución digital innovadora que hará despegar tu negocio. ¡Contáctame y hablamos sobre cómo llevar tus proyectos al siguiente nivel!
            </p>
            <div className="personal-info">
              <p><strong>Nombre:</strong> Suarez Reinoso Guillermo</p>
              <p><strong>Email:</strong> <a href="">dev.guillesr@gmail.com</a></p>
            </div>
            <ul className="social-links">
              <li><a href="https://www.behance.net" className="social-icon fab fa-behance"></a></li>
              <li><a href="https://www.linkedin.com" className="social-icon fab fa-linkedin-in"></a></li>
              <li><a href="https://www.facebook.com" className="social-icon fab fa-facebook-f"></a></li>
              <li><a href="https://twitter.com" className="social-icon fab fa-twitter"></a></li>
            </ul>
            <div className="action-buttons">
              <a href="contact.html" className="btn btn-primary">Contrátame</a>
              <a href="#download-cv" className="btn btn-primary">Descargar CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="what-i-do">
      <div className="container-what-i-do">
        <div className="title-heading text-center">
          <h3 className="main-title">Lo que hago</h3>
        </div>
        <div className="box-what-i-do">
          <div className="col">
            <div className="about-single">
              
              <div className="about-content">
                <div className='title-content'>
                <h5 className="about-title">Desarrollo Web</h5>
                <div className="about-icon">
                <Board className="icono" />
                </div>
              </div>
                <p className="about-text">Me especializo en crear sitios web modernos, responsivos y fáciles de usar que ayudan a las empresas a destacarse en línea. 
              Mi experiencia abarca desde el desarrollo de páginas de aterrizaje elegantes hasta la creación de plataformas de comercio electrónico complejas. 
              Ya seas una pequeña empresa que busca establecer una presencia en línea o una compañía consolidada que desea mejorar su plataforma digital, 
              ofrezco soluciones personalizadas para satisfacer tus necesidades únicas.</p>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </section> */}
    </>
  )
}

export default About