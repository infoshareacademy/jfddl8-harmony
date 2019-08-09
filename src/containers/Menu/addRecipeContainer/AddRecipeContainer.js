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
  },
  button: {
    marginTop: 50,
  },
  header: {
    margin: '0 auto',
    textAlign: 'center'
  }
}


class AddRecipeContainer extends React.Component {
  state = {
    recipeState: {
      title: '',
      ingredients: [],
      description: '',
      nutritiveValue: '',
      label: '',
      photo: '',
      isFavorite: false
    }
  }

  // reset() {
  //   this.setState(initialState)
  // }

  onInputChangeHandler(input) {

    return (event) => {
      const text = event.target.value
      this.setState({
        recipeState: {
          ...this.state.recipeState,
          [input]: text
        }
      })

    }
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
        photo: '',
        isFavorite: false
      }
    })
  }
  render() {
    return (
      <Paper style={styles.paper}>
        <div className="addRecipeContainer">
          <h1 style={styles.header}
          >Dodaj swój przepis</h1>
          <br />
          <TitleOfRecipe
            title={this.state.title}
            onInputChangeHandler={this.onInputChangeHandler('title')}
          />
          <h5>Wpisz tytuł przepisu</h5>
        </div>
        <div>
          <Ingredients
            ingredients={this.state.ingredients}
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
          />
          <h5>Składniki</h5>
        </div>
        <Description
          description={this.state.description}
          onInputChangeHandler={this.onInputChangeHandler('description')}
        />
        <h5>Przygotowanie</h5>
        <div>
          <NutritiveValue
            nutritiveValue={this.state.nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          <h5>Wartość energetyczna</h5>
        </div>
        <div>
          <PhotoOfRecipe
            photo={this.state.photo}
            onInputChangeHandler={this.onInputChangeHandler('photo')}
          />
          <h5>Dodaj link do zdjęcia</h5>
        </div>
        <div>
          <Label
            label={this.state.label}
            onInputChangeHandler={this.onInputChangeHandler('label')} />
        </div>
        <div>
          <Button style={styles.button} variant='outlined' onClick={this.onSendData}>Zapisz</Button>
        </div>
      </Paper>
    )
  }
}

export default AddRecipeContainer

