import React from 'react'

function Icon({ href, iconClass }) {
  return (
    <a href={href} className="social-icon">
    <IconComponent className="svg-icon" />
  </a>
  )
}

export default Icon