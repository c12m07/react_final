import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import './Contact.css';
import { TextField, Button, Alert } from '@mui/material';

function Contact() {
  // VARIABLES DE VALIDACION
  const validName = /^[A-Za-z]+((\s)?((||\.)?([A-Za-z])+))*$/;
  const validNumber = /^[0-9]+$/;
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // VARIABLES FORM
  const [valueName, setValueName] = useState({ campo: '' });
  const [valuePhone, setValuePhone] = useState({ campo: '' });
  const [valueEmail, setValueEmail] = useState({ campo: '' });
  const [valueMessage, setValueMessage] = useState({ campo: '' });

  // VARIABLES ERROR
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  // ELEMENTOS
  const spinner = document.getElementById('spinner');
  const submitButton = document.getElementById('sendForm');
  const validAlert = document.getElementById('alert');
  const clientName = document.getElementById('clientName');
  const clientNumber = document.getElementById('clientNumber');
  const clientEmail = document.getElementById('clientEmail');
  const clientMessage = document.getElementById('clientMessage');

  // VARIABLES CONFIRMACIÓN
  const [checkedName, setCheckedName] = useState(false);
  const [checkedPhone, setCheckedPhone] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);

  // FUNCIONES VALIDACION
  const onChangeName = (e) => {
    setValueName({ ...valueName, campo: e.target.value });
    if (validName.test(valueName.campo)) {
      setErrorName('');
      setCheckedName(true);
    } else {
      setErrorName('* Solo se admiten letras *');
    }
  };
  const onChangePhone = (e) => {
    setValuePhone({ ...valuePhone, campo: e.target.value });
    if (validNumber.test(valuePhone.campo)) {
      setErrorPhone('');
      setCheckedPhone(true);
    } else {
      setErrorPhone('* Solo se admiten números *');
    }
  };
  const onChangeEmail = (e) => {
    setValueEmail({ ...valueEmail, campo: e.target.value });
    if (validEmail.test(valueEmail.campo)) {
      setErrorEmail('');
      setCheckedEmail(true);
    } else {
      setErrorEmail('* Ingrese un email válido *');
    }
  };
  const onChangeMessage = (e) => {
    setValueMessage({ ...valueMessage, campo: e.target.value });
  };

  // FORM VALIDACION
  const sendForm = (e) => {
    submitButton.style.display = 'none';
    spinner.style.display = 'block';

    if (
      checkedName === true &&
      checkedPhone === true &&
      checkedEmail === true
    ) {
      setInterval(() => {
        spinner.style.display = 'none';
        validAlert.style.display = 'flex';
        clientName.value = '';
        clientNumber.value = '';
        clientEmail.value = '';
        clientMessage.value = '';
      }, 3000);
    }
  };

  // CAPTURA DE DATOS
  function onSubmit(e) {
    e.preventDefault();
    sendForm();
  }

  // FORMULARIO
  return (
    <>
      <Header />
      <div className="container">
        <h2>Contacto</h2>
        <p className="ContactText">
          Si te interesa contratarme envíame tus datos y nos pondremos
          en contacto!
        </p>

        <form onSubmit={onSubmit} className="container__contact">
          <div className="container__contact__section">
            <TextField
              onChange={onChangeName}
              onKeyUp={onChangeName}
              onBlur={onChangeName}
              className="ContactTextField"
              id="clientName"
              label="Nombre"
              variant="outlined"
              type="text"
              margin="normal"
              helperText={errorName}
              required
            />
          </div>
          <div className="container__contact__section">
            <TextField
              onChange={onChangePhone}
              onKeyUp={onChangePhone}
              onBlur={onChangePhone}
              className="ContactTextField"
              id="clientNumber"
              label="Número de Telefono"
              variant="outlined"
              type="text"
              margin="normal"
              helperText={errorPhone}
              required
            />
          </div>
          <div className="container__contact__section">
            <TextField
              onChange={onChangeEmail}
              onKeyUp={onChangeEmail}
              onBlur={onChangeEmail}
              className="ContactTextField"
              id="clientEmail"
              label="Email"
              variant="outlined"
              type="email"
              margin="normal"
              helperText={errorEmail}
              required
            />
          </div>
          <div className="container__contact__section">
            <TextField
              onChange={onChangeMessage}
              onKeyUp={onChangeMessage}
              onBlur={onChangeMessage}
              value={valueMessage.campo || ''}
              id="clientMessage"
              className="ContactTextField"
              label="Mensaje"
              placeholder="Déjame un mensaje"
              rows={4}
              margin="normal"
              multiline
            />
          </div>
          <div className="container__contact__section">
            <Button id="sendForm" variant="outlined" type="submit">
              ENVIAR
            </Button>

            <div className="spinner" id="spinner"></div>

            <Alert id="alert" severity="success">
              Formulario enviado — ¡Pronto nos pondremos en contacto!
            </Alert>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
