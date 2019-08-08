import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

const TitleOfRecipe = (props) => (
  <TextField
  required
    margin="normal"
    label="Tytuł przepisu"
    value={props.recipeState.title}
    fullWidth
    onChange={props.onInputChangeHandler}
  />
)

TitleOfRecipe.propTypes = {
  recipeState: PropTypes.object, 
  onInputChangeHandler: PropTypes.func
}

TitleOfRecipe.defaultProps = {
  recipeState: {},
  onInputChangeHandler: () => {}
}


export default TitleOfRecipe