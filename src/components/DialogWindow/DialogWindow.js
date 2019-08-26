import React from 'react';

import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const styles = {
  
  img: {
    maxWidth: '25em',
    maxHeigth: '20em'
  }
}

const CustomizedDialogs = (props) => {

 
  return (
    <MuiDialog
      open={props.open}
      onClose={props.onClose}
    >
      <div>
        <DialogTitle>
          {props.recipe.title}
        </DialogTitle>
          <img style={styles.img} src={props.recipe.photo} alt={props.recipe.photo} />
        <Typography>
          <b>Składniki: </b>
          <br/>
          {props.recipe.ingredients}
          </Typography>
          {/* <Typography gutterBottom> */}
            {props.recipe.nutritiveValue}
          {/* </Typography> */}
        <DialogContent>
          <Typography>
            <b>Sposób przygotowania:</b>
            <br />
            {props.recipe.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Zamknij
          </Button>
        </DialogActions>
      </div>
    </MuiDialog>
  );
}

export default CustomizedDialogs
