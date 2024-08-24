import  React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";


const Navbar =({ navFixed })=> {
  const [isActive, setIsActive] = useState(false);
  
  const handleBurgerClick = () => {
    // Alterna el estado de isActive
    setIsActive(!isActive);
  };

  return (
    <nav className='navbar is-fixed-top has-shadow'>
      <div className='navbar-brand mx-3'>
        <p>GSR</p>
        <a 
        role="button" 
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample"
        className={`navbar-burger has-text-white ${isActive ? "is-active": `` }`}
        onClick={handleBurgerClick}
        >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
         </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : `` }`}>
        <div className={`navbar-menu ${isActive ? "is-active" : `` }`}> 
      {/* <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}> */}
        
      <div className="navbar-start ">
        <Link className="nav-link has-text-centered" to="/">Inicio<span className="sr-only"></span></Link>
        <Link className="nav-link has-text-centered" to="/About">Acerca de mi</Link>
        <Link className="nav-link has-text-centered" to="/Services">Servicios</Link>
        <Link className="nav-link has-text-centered" to="/Contact">Contacto</Link>
      </div>
      <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons is-justify-content-center">
        <Link className="btn btn-style btn-primary mr-lg-5" to="/Contact">Contratame</Link>
        </div>
      </div>
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;







{/* // antes
// import  React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Navbar/Navbar.css'; 
// import "../../assets/css/style-liberty.css";

// const Navbar =({ navFixed })=> { */}

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };


//   return (
//     <header id="site-header" className={`fixed-top  ${navFixed ? 'nav-fixed' : 'nav-transparent'}`}>
//       <div className="container">
//         <nav className="navbar navbar-expand-lg stroke">
//           <h1>
//             <Link className="navbar-brand" to="/">
//               <i className="fab fa-asymmetrik"></i> GSR
//             </Link>
//           </h1>

//           <button className="menu-icon" onClick={toggleMenu}>
//             <span className="menu-icon-bar"></span>
//             <span className="menu-icon-bar"></span>
//             <span className="menu-icon-bar"></span>
//           </button>

//           <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//             <li className="nav-item active">
//               <Link className="nav-link" to="/">Inicio<span className="sr-only"></span></Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/About">Acerca de mi</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Services">Servicios</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Contact">Contacto</Link>
//             </li>
//             <div className="header-btn">
//               <Link className="btn btn-style btn-primary mr-lg-5" to="/Contact">Contratame</Link>
//             </div>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;