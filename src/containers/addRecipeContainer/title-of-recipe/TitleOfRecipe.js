import React from 'react'

import TextField from '@material-ui/core/TextField'

const TitleOfRecipe = (props) => (
  <TextField
  required
    margin="normal"
    label="Tytuł przepisu"
    value={props.title}
    fullWidth
    onChange={props.onInputChangeHandler}
  />
)

export default TitleOfRecipe