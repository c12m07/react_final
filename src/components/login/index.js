import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './Login.css';
import LoginContext from '../../context/LoginContext';

function Login() {
  // VARIABLES DE VALIDACION
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validId = /^[0-9]+$/;

  // VARIBALES DE useCONTEXT
  const context = useContext(LoginContext);
  const { logged, token } = context;
  const { email } = context.values;
  const [contextEmail, setContextEmail] = email;
  const [valueLogged, setValueLogged] = logged;
  const [valueToken, setValueToken] = token;

  // VARIABLES FORM
  const [valueEmail, setValueEmail] = useState({ campo: '' });
  const [valueId, setValueId] = useState({ campo: '' });
  const [errorEmail, setErrorEmail] = useState('');
  const [errorId, setErrorId] = useState('');

  const navigate = useNavigate();

  // NO RETORNO
  useEffect(() => {
    setValueLogged(false);
    // eslint-disable-next-line
  }, []);

  // FUNCIONES VALIDACION
  const onChangeEmail = (e) => {
    setValueEmail({ ...valueEmail, campo: e.target.value });
    if (validEmail.test(valueEmail.campo)) {
      setErrorEmail('');
    } else {
      setErrorEmail('* Ingrese un email válido *');
    }
  };
  const onChangeId = (e) => {
    setValueId({ ...valueId, campo: e.target.value });
    if (validId.test(valueId.campo)) {
      setErrorId('');
    } else {
      setErrorId('* Solo se admiten números *');
    }
  };

  // LOGIN
  function login(email) {
    axios
      .post(`${context.baseUrl}/auth/login`, context.values)
      .then((res) => res.data.token)
      .then((token) => {
        setValueToken(token);
        console.log(valueToken);
        setValueLogged(true);
        console.log(valueLogged);
        setContextEmail(email);
        console.log(contextEmail);
        console.log(context);
        navigate('/inicio');
      });
  }

  // CAPTURA DE DATOS
  function onSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const id = document.getElementById('discordId');

    context.values.email = email.value;
    context.values.discordId = id.value;

    login(email.value);
  }

  // FORMULARIO
  return (
    <div className="LoginContainer">
      <h1 data-testid="title">Inicia Sesion</h1>
      <form onSubmit={onSubmit}>
        <TextField
          onChange={onChangeEmail}
          onKeyUp={onChangeEmail}
          onBlur={onChangeEmail}
          id="email"
          data-testid="email"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          margin="normal"
          helperText={errorEmail}
          required
        />
        <TextField
          onChange={onChangeId}
          onKeyUp={onChangeId}
          onBlur={onChangeId}
          id="discordId"
          label="Discord ID"
          variant="filled"
          type="text"
          name="discordId"
          margin="normal"
          helperText={errorId}
          // autoComplete='off'
          required
        />
        <Button variant="outlined" type="submit">
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default Login;
