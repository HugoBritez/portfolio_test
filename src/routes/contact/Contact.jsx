import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div>
      
      <div className="contact_section">


        <h1 className="section_title">Contactame!</h1>
        <div className="form-card1">
  <div className="form-card2">
    <form className="form">
      <p className="form-heading">Mandame un Email!</p>

      <div className="form-field">
        <input required="" placeholder="Nombre" className="input-field" type="text" />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Email"
          className="input-field"
          type="email"
        />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Asunto"
          className="input-field"
          type="text"
        />
      </div>

      <div className="form-field">
        <textarea
          required=""
          placeholder="Mensaje"
          cols="30"
          rows="3"
          className="input-field"
        ></textarea>
      </div>

      <button className="sendMessage-btn">Enviar</button>
    </form>
  </div>
</div>
      </div>



    </div>
  );
}

export default Contact;