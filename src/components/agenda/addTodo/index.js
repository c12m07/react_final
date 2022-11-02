import React from 'react';
import { TextField, Button } from '@mui/material';

function AddTodo(params) {
  console.log(params.onSubmit);
  return (
    <>
      <form onSubmit={params.onSubmit}>
        <TextField
          id="standard-basic"
          variant="filled"
          type="text"
          name="name"
        />
        <Button variant="outlined" type="submit">
          Añadir
        </Button>
      </form>
    </>
  );
}

export default AddTodo;
