import React from 'react'

import TextField from '@material-ui/core/TextField'

const Description = (props) => (
  <div>
    <TextField
  style={{ margin: 10 }}
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
    onChange={props.onInputChangeHandler}
    value={props.description}
  />
  </div>
)
export default Description