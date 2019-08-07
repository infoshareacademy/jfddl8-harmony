import React from 'react'

import TextField from '@material-ui/core/TextField'


const PhotoOfRecipe = (props) => (
  <TextField
    label="Dodaj link do zdjęcia"
    fullWidth
    rowsMax="20"
    rows="12"
    margin="normal"
    value={props.photo}
    onChange={props.onInputChangeHandler}
  />
)

export default PhotoOfRecipe