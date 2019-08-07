import React from 'react'

import { Button as MuiButton } from '@material-ui/core/'

const Button = (props) => {
  return (
    <MuiButton
      color="secondary" 
      fullWidth
      onClick={props.onClick}
    >
      ZAPISZ
    </MuiButton>
  )
}

export default Button