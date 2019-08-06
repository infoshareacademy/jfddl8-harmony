import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import PhotoOfRecipe from './photo/PhotoOfRecipe'
import Label from './label/Label'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import { addRecipeToFireBase } from './recipesService'

const styles = {
  paper: {
    margin: 12,
    padding: 50
  },
  button: {
    marginTop: 50
  }
}
//const labels = ["Breakfast", "Lunch", "Supper", "Dessert", "Snack"]


class AddRecipeContainer extends React.Component {
  state = {
    recipeState: {
      title: '',
      ingredients: '',
      description: '',
      nutritiveValue: '',
      label: '',
      url: '',
      isFavorite: false
    }
  }

  // reset() {
  //   this.setState(initialState)
  // }

  onInputChangeHandler(event, input) {
    const text = event.target.value
    this.setState({
      recipeState: {
        ...this.state.recipeState,
        [input]: text
      }
    })
  }

  onSendData = (event) => {
    event.preventDefault()
    addRecipeToFireBase(this.state.recipeState)
    this.setState({
      recipeState: {
        title: '',
        ingredients: '',
        description: '',
        nutritiveValue: '',
        label: '',
        url: '',
        isFavorite: false
      }
    })
  }
  render() {
    return (
      <Paper style={styles.paper}>
        <div className="addRecipeContainer">
          <h1>Dodaj swój przepis</h1>
          <br />
          <TitleOfRecipe
            hintText="Tytuł przepisu"
            onInputChangeHandler={this.onInputChangeHandler('title')}
            title={this.state.title}
          />
          <h3>Wpisz tytuł przepisu</h3>
        </div>
        <div>
          <Ingredients
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
            ingredients={this.state.ingredients}
          />
          <h3>Składniki</h3>
        </div>
        <Description
          onInputChangeHandler={this.onInputChangeHandler('description')}
          description={this.state.description}
        />
        <h3>Przygotowanie</h3>
        <div>
          <NutritiveValue
            nutritiveValue={this.state.nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          <h3>Wartość energetyczna</h3>
        </div>
        <div>
          <PhotoOfRecipe
            onInputChangeHandler={this.onInputChangeHandler('url')}
            url={this.state.url}
          />
          <h3>Dodaj link do zdjęcia</h3>
        </div>
        <div>
          <Label />
        </div>
        <div>
          <Button color="blue" style={styles.button} fullWidth={true} onClick={this.onSaveClicker}>Zapisz</Button>
        </div>
      </Paper>
    )
  }
}

export default AddRecipeContainer

