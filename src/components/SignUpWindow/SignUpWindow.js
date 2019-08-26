import React from 'react'

import Paper from '@material-ui/core/Paper'
import { TextField, Button, Typography } from '@material-ui/core';

import LogoPic from '../../img/logopoziomprzezroczystetlo.png'


const styles = {
  paper: {
    padding: 20,
    margin: '0 auto',
    maxWidth: 320,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#D65A31'
  },
  div: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#393E46'
  },
  img: {
    maxWidth: '80%',
    maxHeigth: '15%'
  }
}

const SignUpWindow = props => {



  return (
    <div style={styles.div}>
      <Paper style={styles.paper}>
        <img style={styles.img} src={LogoPic} alt={LogoPic} />
        <Typography>
        <b>Please sign in:</b>
      </Typography>
        <TextField
          label="email"
          placeholder="Wpisz poprawny email"
          margin="normal"
          fullWidth={true}
          value={props.email}
          onChange={props.onEmailChanged}
        />
        <TextField
          label="Hasło"
          placeholder="Minimum 8 znaków."
          margin="normal"
          fullWidth={true}
          value={props.password}
          onChange={props.onPasswordChanged}
        />
        {/* <TextField
          label="Haslo2"
          placeholder="Haslo2"
          margin="normal"
          fullWidth={true}
          value={props.password2}
          onChange={props.onPasswordChanged2}
        /> */}
        <Button
          style={styles.button}
          variant={'contained'}
          color={'primary'}
          onClick={props.onSignInSubmit}
        >
          Sign me
        </Button>
        <br />
        <Button
          style={styles.button}
          variant={'contained'}
          color={'primary'}
          onClick={props.onBackClick}
        >
          Back to log in
        </Button>

      </Paper>

    </div>
  )

}

export default SignUpWindow