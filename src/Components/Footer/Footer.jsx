import React from 'react'
import "../Footer/Footer.css"
import { ReactComponent as InstaIcon } from '../../assets/iconos/instagram-brands-solid.svg';
import { ReactComponent as MailIcon} from '../../assets/iconos/mail.svg';
import { ReactComponent as LinkedinIcon} from '../../assets/iconos/linkedin-in-brands-solid.svg';


function Footer() {
  return (
    <>
    <footer className="footer">
      <div className='content  is-flex is-flex-direction-column'>

      <div className="footer-contact">
          <ul>
            <li className='is-flex is-justify-content-center' >
              <a className='mail' href="mailto:dev.guillesr@gmail.com">dev.guillesr@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul className='is-flex is-justify-content-center'>
          <li className='insta-container' >
                <a href="https://www.instagram.com/dev.guillesr/" target="_blank" className="social-icon-footer new-icon insta-icon">
                  <InstaIcon />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/suarezreinosoguillermo/" target="_blank" className="social-icon-footer new-icon linkedin-icon">
                  <LinkedinIcon/>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer


{/* <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="index.html">Portfolio</a>
        </div>
        <div className="footer-contact">
          <ul>
            <li>
              <a href="mailto:dev.guillesr@gmail.com">dev.guillesr@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
          <li>
                <a href="#url" className="social-icon new-icon insta-icon">
                  <InstaIcon />
                </a>
            </li>
            <li>
                <a href="#url" className="social-icon new-icon mail-icon">
                  <MailIcon className="icono"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/suarezreinosoguillermo/" className="social-icon new-icon linkedin-icon">
                  <LinkedinIcon/>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer> */}