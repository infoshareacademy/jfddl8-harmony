import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import PhotoOfRecipe from './photo/PhotoOfRecipe'
import Label from './label/Label'

import Button from '../../components/button'
import { warningSnackbar, errorSnackbar, successSnackbar } from '../../components/snackbars/Snackbar'
import Paper from '@material-ui/core/Paper'

import { addRecipeToFireBase } from '../../databaseService'

const styles = {
  paper: {
    margin: 12,
    padding: 50
  },
  header: {
    margin: '0 auto',
    padding: 0,
    textAlign: 'center'
  }
}

const initialState = {
  recipeState: {
    title: '',
    ingredients: [],
    description: '',
    nutritiveValue: '',
    label: 'breakfast',
    photo: '',
    isFavorite: false,
    errors: {
      title: false,
      nutritiveValue: false,
      photo: false
    }
  }
}

class AddRecipeContainer extends React.Component {
  state = initialState

  messages = {
    successMessage: 'Przepis dodany!',
    lackOfTitleMessage: 'Dodaj tytuł',
    lackOfNutritiveValueMessage: 'Dodaj wartość odżywczą',
    lackOfPhotoMessage: 'Dodaj link do zdjęcia',
    wrongUrlMessage: 'Dodaj prawidłowy link do zdjęcia zawierający na początku protokół http:// lub https://',
    errorMessage: 'Wystąpił błąd. Spróbuj później'
  }

  onInputChangeHandler(input) {
    return (event) => {
      const selectValue = event.value
      const valueToSave = selectValue || (event.target && event.target.value) || ''
      this.setState({
        recipeState: {
          ...this.state.recipeState,
          [input]: valueToSave
        }
      })
    }
  }

  onSendData = (event) => {
    event.preventDefault()
    const validation = this.formValidation

  }

  formValidation = () => {
    const isURLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    let title = false
    let nutritiveValue = false
    let photo = false
    let photoUrl = false
    if (this.state.recipeState.title) {
      title = true
    }

    if (this.state.recipeState.nutritiveValue && this.state.recipeState.nutritiveValue.indexOf(' ') === -1) {
      nutritiveValue = true
      return
    }

    if (this.state.recipeState.photo) {
      photo = true
      return
    }
    else if (!this.state.recipeState.photo) {
      photo = false
      return
    }
    else if (isURLRegex.test(this.state.recipeState.photo)) {
      photoUrl = false
      return
    }
    addRecipeToFireBase(this.state.recipeState)
      .then(() => {
        alert('przepis dodany!')
        this.setState(initialState)
      })
      .catch(() => {
        alert('Wystąpił błąd. Proszę spróbować później')
      })
  }

  render() {
    const { recipeState = {} } = this.state

    return (
      <Paper style={styles.paper}>
        <div className="addRecipeContainer">
          <h1 style={styles.header}
          >Dodaj swój przepis !</h1>
          <h5>Wpisz tytuł przepisu:</h5>
          <br />
          <TitleOfRecipe
            title={recipeState.title}
            onInputChangeHandler={this.onInputChangeHandler('title')}
          />
          {this.state.recipeState.errors.title &&
            <span className="warningMessage">{this.messages.lackOfTitleMessage}</span>}
        </div>
        <div>
          <h5>Składniki:</h5>
          <Ingredients
            ingredients={recipeState.ingredients}
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
          />
        </div>
        <h5>Przygotowanie:</h5>
        <Description
          description={recipeState.description}
          onInputChangeHandler={this.onInputChangeHandler('description')}
        />
        <div>
          <h5>Wartość energetyczna:</h5>
          <NutritiveValue
            nutritiveValue={recipeState.nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          {this.state.recipeState.errors.nutritiveValue &&
            <span className="warningMessage">{this.messages.lackOfNutritiveValueMessage}</span>}
        </div>
        <div>
          <h5>Dodaj link do zdjęcia:</h5>
          <PhotoOfRecipe
            photo={recipeState.photo}
            onInputChangeHandler={this.onInputChangeHandler('photo')}
          />
          {this.state.recipeState.errors.photo &&
            <span className="warningMessage">{this.messages.lackOfPhotoMessage}</span>}
        </div>
        <div>
          <Label
            label={recipeState.label}
            handleChange={this.onInputChangeHandler('label')}
          />
        </div>
        <div>
          <Button onClick={this.onSendData}>ZAPISZ</Button>
        </div>
      </Paper>
    )
  }
}

export default AddRecipeContainer

