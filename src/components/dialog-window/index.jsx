import React from 'react';
import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText'

import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const CustomizedDialogs = (props) => {
  // const ingredients = props.recipe.ingredients
  // const mappedIngredients = ingredients.map(ingredient =>(
  //   <ListItem>
  //   <ListItemText
  //     primary={ingredient}
  //   />
  // </ListItem>
  // ))

  return (
    <MuiDialog
      open={props.open}
      onClose={props.onClose}
    >
      <div>
        <DialogTitle>
          {props.recipe.title}
        </DialogTitle>
        <Typography gutterBottom>
            {props.recipe.ingredients}
          </Typography>
          <Typography gutterBottom>
            <h3>{props.recipe.label}</h3>
            {props.recipe.nutritiveValue}
          </Typography>
        <DialogContent>
          <img src={props.recipe.photo} alt={props.recipe.photo} />
          <Typography gutterBottom>
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
