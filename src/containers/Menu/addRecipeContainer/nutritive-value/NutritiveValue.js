import React from 'react'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const NutritiveValue = (props) => (
  <TextField
    value={props.NutritiveValue}
    onChange={props.onInputChangeHandler}
    variant="outlined"
    label="kcal/100g"
    InputProps={{
      startAdornment: <InputAdornment position="start">kcal</InputAdornment>,
    }}
    type="number"
    InputLabelProps={{
      shrink: true,
    }}
  />
)

export default NutritiveValue

