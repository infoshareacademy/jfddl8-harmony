import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import PhotoOfRecipe from './photo/PhotoOfRecipe'
import Label from './label/Label'

import Button from '../../../components/button/Button'
import Paper from '@material-ui/core/Paper'

///import { ErrorSnackbar, WarningSnackbar, SuccessSnackbar } from '../../../components/snackbars/Snackbar'
import { addRecipeToFireBase } from '../../../databaseService'

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
    accept: false,
    message: '',
    errors: {
      title: false,
      nutritiveValue: false,
      photo: false,
      accept: false
    }
  }
}

class AddRecipeContainer extends React.Component {
  state = initialState

  messages = {
    title: 'Dodaj tytuł przepisu',
    nutritiveValue: 'Dodaj prawidłową wartość odżywczą',
    photo: 'Dodaj link do zdjęcia zawierajacy na początku protokół http:// lub https://',
    success: 'Dodany przepis',
    error: 'Wystąpił błąd. Spróbuj ponownie później.'
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
    const validation = this.formValidation()
    if (validation.correct) {
      this.setState({
        recipeState: {
          title: '',
          ingredients: [],
          description: '',
          nutritiveValue: '',
          label: 'breakfast',
          photo: '',
          message: 'Przepis jest zapisany!',
          isFavorite: false,
          errors: {
            title: false,
            nutritiveValue: false,
            photo: false,
          }
        }
      })
    } else {
      this.setState({
        title: !validation.title,
        nutritiveValue: !validation.nutritiveValue,
        photo: !validation.photo,
      })
      return
    }
    addRecipeToFireBase(this.state.recipeState)
      .then(() => {
        this.setState(initialState)
      })
      .catch(() => {
        alert('Wystąpił błąd. Proszę spróbować później')
      })
  }
  formValidation = () => {
    const isURLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    let title = false
    let nutritiveValue = false
    let photo = false
    let correct = false

    if (this.state.recipeState.title) {
      title = true
    }
    if (this.state.recipeState.nutritiveValue) {
      nutritiveValue = true
    }
    if (isURLRegex.test(this.state.recipeState.photo) &&
      this.state.recipeState.photo) {
      photo = true
    }
    if (title && nutritiveValue && photo) {
      correct = true
    }
    return ({
      correct,
      title,
      nutritiveValue,
      photo,
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
          {this.state.recipeState.errors.title && <span> {this.messages.title} </span>}
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
          {this.state.recipeState.errors.nutritiveValue && <span> {this.messages.nutritiveValue} </span>}
        </div>
        <div>
          <h5>Dodaj link do zdjęcia:</h5>
          <PhotoOfRecipe
            photo={recipeState.photo}
            onInputChangeHandler={this.onInputChangeHandler('photo')}
          />
          {this.state.recipeState.errors.photo && <span> {this.messages.photo} </span>}
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

