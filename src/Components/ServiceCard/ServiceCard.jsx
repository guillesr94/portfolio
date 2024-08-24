import React from 'react'

import "../ServiceCard/ServiceCard.css"

function ServiceCard({ Icon, serviceName, description }) {
  return (
    <>
      <div className="notification has-background-white-ter m-3">
      <div className="icon-container">
      <Icon className="service-icon"/>
      </div>
        <h5 className="service-title"><a href="#">{serviceName}</a></h5>
        <p className="service-description">{description}</p>
    </div>
      {/* Desarrollo de Software a Medida
      <div>
        <div>
          <div>
            <i className="fas fa-cogs"></i>
          </div>
          <div>
            <h5><a href="#">Desarrollo de Software a Medida</a></h5>
            <p>Desarrollo de soluciones de software personalizadas para optimizar procesos y mejorar la eficiencia.</p>
          </div>
        </div>
      </div>

      {/* Optimización de Rendimiento */}
      {/* <div>
        <div>
          <div>
            <i className="fas fa-tachometer-alt"></i>
          </div>
          <div>
            <h5><a href="#">Optimización de Rendimiento</a></h5>
            <p>Mejora de la velocidad y el rendimiento de sitios web y aplicaciones para una mejor experiencia de usuario.</p>
          </div>
        </div>
      </div>  */}
    </>
  )
}

export default ServiceCard