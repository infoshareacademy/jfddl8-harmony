import React from 'react'

import TextField from '@material-ui/core/TextField'

const Ingredients = (props) => (
  <TextField
    rowsMax="20"
    rows="12"
    margin="normal"
    value={props.Ingredients}
    fullWidth
    onChange={props.onInputChangeHandler}
  />
)

export default Ingredients