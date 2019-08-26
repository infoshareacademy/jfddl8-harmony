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

const RetrievePasswordWindow = props => {

  return (

    <div style={styles.div}>

      <Paper style={styles.paper}>
        <img style={styles.img} src={LogoPic} alt={LogoPic} />
        <Typography>
          <b>Reset Password:</b>
        </Typography>
        <TextField
          label={'E-mail'}
          fullWidth={true}
          value={props.emailToReset}
          onChange={props.onEmailToResetChanged}
        />
        <Button
          style={styles.button}
          variant={'contained'}
          color={'primary'}
          onClick={props.onResetClick}
        >
          Resetuj hasło.
        </Button>
        <br />
        <Button
          style={styles.button}
          variant={'contained'}
          color={'primary'}
          onClick={props.onResetWindowClick}
        >
          Wróć.
        </Button>
      </Paper>

    </div>

  )
}


export default RetrievePasswordWindow