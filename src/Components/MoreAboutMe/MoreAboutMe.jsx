import React from 'react'
import "../MoreAboutMe/MoreAboutMe.css"
import meWithCircle from "../../assets/images/Me-with-circle.png"
import meInformal from "../../assets/images/yo-informal.jpeg"

function MoreAboutMe() {
  return (
   <>
    <section className="section">
      <div className="container">
        <div className="columns ">
          
          <div className="column">
            <h3 className="title title-brown">Mi Trayectoria Profesional</h3>
            <p className="has-text-black ">
              Actualmente estoy cursando la  Tecnicatura Superior
              en Desarrollo de Software, mientras trabajo como freelancer. 
              Me enfoco en ofrecer soluciones web de alta calidad que no solo cumplen sino que superan las expectativas de los clientes. 
              Aprovechando mis habilidades, ayudo a las empresas a mejorar su presencia en línea y atraer más clientes mediante sitios web bien diseñados y profesionales.
            </p>

            <div className="">
              <div className="titles-information-box title-1">
                <h4 className='subtitle is-3 title-brown'>Habilidades Técnicas</h4>
                <p className='subtitle is-5 has-text-black'>Experiencia con Java y React.</p>
              </div>
            </div>

            <div className="">
              <div className="titles-information-box">
                <h5 className='subtitle is-3 title-brown'>Experiencia Freelance</h5>
                <p className='subtitle is-5 has-text-black'>Trabajando con diversos clientes para mejorar su presencia en línea.</p>
              </div>
            </div>

            <div className="">
              <div className="titles-information-box">
                <h5 className='subtitle is-3 title-brown'>Satisfacción del Cliente</h5>
                <p className='subtitle is-5 has-text-black'>Comprometido con la satisfacción total del cliente.</p>
              </div>
            </div>

            <div className="">
              <div className="titles-information-box">
                <h5 className='subtitle is-3 title-brown'>Excelencia en Diseño Web</h5>
                <p className='subtitle is-5 has-text-black'>Creación de sitios web que combinan funcionalidad y estética.</p>
              </div>
            </div>
          </div>
          <div className="column column-img">
            <img src={meInformal} alt="About" className="yo-informal" />
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default MoreAboutMe