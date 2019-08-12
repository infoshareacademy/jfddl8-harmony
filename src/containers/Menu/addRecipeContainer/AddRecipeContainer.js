import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import PhotoOfRecipe from './photo/PhotoOfRecipe'
import Label from './label/Label'

import Button from '../../../components/button/Button'
import Paper from '@material-ui/core/Paper'


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
  title: '',
  ingredients: [],
  description: '',
  nutritiveValue: '',
  label: 'breakfast',
  photo: '',
  isFavorite: false,
  message: '',
  errors: {
    isTitle: false,
    isNutritiveValue: false,
    isPhoto: false
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
        [input]: valueToSave
      })
    }
  }

  onSendData = (event) => {
    event.preventDefault()

    const errors = this.formValidation()
    const { isTitle, isNutritiveValue, isPhoto } = errors
    if (isTitle && isNutritiveValue && isPhoto) {
      const stateToSave = { ...initialState }
      stateToSave.message = 'Przepis jest zapisany!'
      this.setState(stateToSave)

    } else {

      this.setState({ errors })
      return
    }
    addRecipeToFireBase(this.state
      .then(() => {
        this.setState(initialState)
      })
      .catch(() => {
        alert('Wystąpił błąd. Proszę spróbować później')
      }))
  }

  formValidation = () => {
    const isURLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    const isTitle = this.state.title
    const isNutritiveValue = this.state.nutritiveValue
    const isPhoto = isURLRegex.test(this.state.photo) &&
      this.state.photo

    return ({
      isTitle,
      isNutritiveValue,
      isPhoto,
    })
  }
  render() {
    const { title, ingredients, description, nutritiveValue, photo, label, errors ={} } = this.state
    return (
      <Paper style={styles.paper}>
        <div className="addRecipeContainer">
          <h1 style={styles.header}
          >Dodaj swój przepis !</h1>
          <h5>Wpisz tytuł przepisu:</h5>
          <br />
          <TitleOfRecipe
            title={title}
            onInputChangeHandler={this.onInputChangeHandler('title')}
          />
          {errors.isTitle && <span> {this.messages.title} </span>}
        </div>
        <div>
          <h5>Składniki:</h5>
          <Ingredients
            ingredients={ingredients}
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
          />
        </div>
        <h5>Przygotowanie:</h5>
        <Description
          description={description}
          onInputChangeHandler={this.onInputChangeHandler('description')}
        />
        <div>
          <h5>Wartość energetyczna:</h5>
          <NutritiveValue
            nutritiveValue={nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          {errors.isNutritiveValue && <span> {this.messages.nutritiveValue} </span>}
        </div>
        <div>
          <h5>Dodaj link do zdjęcia:</h5>
          <PhotoOfRecipe
            photo={photo}
            onInputChangeHandler={this.onInputChangeHandler('photo')}
          />
          {errors.isPhoto && <span> {this.messages.photo} </span>}
        </div>
        <div>
          <Label
            label={label}
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

