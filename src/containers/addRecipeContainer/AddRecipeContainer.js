import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import Label from './label/Label'
import Button from '@material-ui/core/Button'


class AddRecipeContainer extends React.Component {
  state = {
    title: '',
    ingredients: '',
    description: '',
    nutritiveValue: '',
    label: '',

  }
  onInputChangeHandler = (property) => {
    return (event) => {
      const newState = {}
      newState[property] = event.target.value
      this.setState(newState)
    }
  }

  onSaveClicker = (props) => {
    const newRecipe = this.state
    const newRecipeString = JSON.stringify(newRecipe)
    localStorage.setItem('recipe', newRecipeString)
  }

  render() {
    return (
      <div className="addRecipeContainer">
        <h1>Dodaj swój przepis</h1>
        <h3>Wpisz tytuł przepisu</h3>
        <TitleOfRecipe
          onInputChangeHandler={this.onInputChangeHandler('title')}
          title={this.state.title}
        />
        <br />
        <h3>Składniki</h3>
        <Ingredients
          onInputChangeHandler={this.onInputChangeHandler('ingredients')}
          ingredients={this.state.ingredients}
        />
        <h3>Przygotowanie</h3>
        <Description
          onInputChangeHandler={this.onInputChangeHandler('description')}
          description={this.state.description}
        />
        <h3>Wartość energetyczna</h3>
        <NutritiveValue
          nutritiveValue={this.state.nutritiveValue}
          onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
        />
        <br />
        <Label />
        <Button color="secondary"  onClick={this.onSaveClicker}>
          Zapisz
      </Button>
      </div>
    )
  }
}

export default AddRecipeContainer

