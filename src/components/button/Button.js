import React from 'react'

import { Button as MuiButton } from '@material-ui/core/'

const Button = (props) => {
  return (

    <MuiButton
      color="default"
      fullWidth
      onClick={props.onClick}
      variant="contained"
    >
      ZAPISZ PRZEPIS
    </MuiButton>

  )
}

export default Button