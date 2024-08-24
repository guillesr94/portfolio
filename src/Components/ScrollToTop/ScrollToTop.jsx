import React ,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';


function ScrollToTop() {
  const { pathname } = useLocation(); // Esto te da la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio
  }, [pathname]); // Solo se ejecuta cuando la ruta cambia
  return null; 

  return (
    <></>
  )
}

export default ScrollToTop