import React, { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import "../Form/Form.css"


function Form() {

  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z48bcd5', 'template_bng414q', form.current, {
        publicKey: 'IR-b-zlIOq5njOTDS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setMessageSent(true); 
          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
    <>
    <section className='form-section'>
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" />
        {messageSent && <p>Mensaje enviado</p>}
        </form>
      </div>
    </section>
    </>
  )
}

export default Form