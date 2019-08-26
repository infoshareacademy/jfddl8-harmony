import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import PhotoOfRecipe from './photo/PhotoOfRecipe'
import Label from './label/Label'

import Button from '../../../components/button/Button'
import Paper from '@material-ui/core/Paper'


import { addRecipeToFireBase } from '../../../services/databaseService'
import { Typography } from '@material-ui/core';

const style = {
  paper: {
    margin: '0 auto',
    padding: 30,
    maxWidth: 600,
    textAlign: 'center'
  },
  button: {
    marginTop: 20
  },
  item: {
    float: "center"
  }
}


const initialState = {
  title: '',
  ingredients: '',
  description: '',
  nutritiveValue: '',
  label: 'breakfast',
  photo: '',
  isFavorite: false,
  isFormFilledCorrectly: false,
  errors: {
    isTitle: false,
    areIngredients: false,
    isDescription: false,
    isNutritiveValue: false,
    isURLCorrect: false,
  }
}

class AddRecipeContainer extends React.Component {
  state = initialState
  messages = {
    title: 'Dodaj tytuł przepisu',
    description: 'Opisz sposób wykonania dodawanego przepisu',
    ingredients: 'Dodaj składniki',
    nutritiveValue: 'Dodaj prawidłową wartość odżywczą',
    photo: 'Dodaj link do zdjęcia zawierajacy na początku protokół http:// lub https://',
    success: 'Dodany przepis',
    error: 'Wystąpił błąd. Spróbuj ponownie później.'
  }

  onInputChangeHandler(input) {
    return (event) => {
      const valueToSave = event.value || (event.target && event.target.value) || ''
      this.setState({
        [input]: valueToSave
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {

    const titleChanged = prevState.title !== this.state.title
    if (titleChanged) {
      this.formValidation()
    }

  }
  formValidation = () => {
    const isURLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    let isTitle = false
    let isDescription = false
    let areIngredients = false
    let isNutritiveValue = false
    let isURLCorrect = false
    let correctForm = false
    const state = this.state

    if (state.title) {
      isTitle = true
    }
    if (state.description) {
      isDescription = true
    }
    if (state.ingredients) {
      areIngredients = true
    }
    if (state.nutritiveValue && state.nutritiveValue.indexOf('-') === -1) {
      isNutritiveValue = true
    }
    if (isURLRegex.test(state.photo)) {
      isURLCorrect = true
    }
    if (isTitle && isDescription && areIngredients && isNutritiveValue && isURLCorrect) {
      correctForm = true
    }

    return ({
      isTitle,
      isDescription,
      areIngredients,
      isNutritiveValue,
      isURLCorrect,
      correctForm
    })
  }
  onSendData = (event) => {
    event.preventDefault()
    const validation = this.formValidation()
    if (validation.correctForm) {
      this.setState({
        ...initialState,
        isFormFilledCorrectly: true
      })

    } else {
      this.setState({
        errors: {
          isTitle: !validation.isTitle,
          isDescription: !validation.isDescription,
          areIngredients: !validation.areIngredients,
          isNutritiveValue: !validation.isNutritiveValue,
          isURLCorrect: !validation.isURLCorrect,
        }
      })
      return
    }
    addRecipeToFireBase(this.state)
      .then(() => this.setState(initialState))
      .catch((error) => {
        console.log('Wystąpił błąd')
      })
  }

  render() {
    const { title, ingredients, description, nutritiveValue, photo, label, errors = {} } = this.state
    return (
      <Paper style={style.paper}>
        <div className="addRecipeContainer">
          <Typography variant="h3">
            Dodaj swój przepis !</Typography>
          <Typography variant='subtitle1'>Wpisz tytuł przepisu:</Typography>
          <br />
          <TitleOfRecipe
            title={title}
            onInputChangeHandler={this.onInputChangeHandler('title')}
          />
          {errors.isTitle && <span> {this.messages.title} </span>}
        </div>
        <div>
          <Typography variant='subtitle1'>Składniki:</Typography>
          <Ingredients
            ingredients={ingredients}
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
          />
          {errors.areIngredients && <span> {this.messages.ingredients} </span>}
        </div>
        <Typography variant='subtitle1'>Przygotowanie:</Typography>
        <Description
          description={description}
          onInputChangeHandler={this.onInputChangeHandler('description')}
        />
        {errors.isDescription && <span> {this.messages.description} </span>}
        <div>
          <Typography variant='subtitle1'>Wartość energetyczna:</Typography>
          <NutritiveValue
            nutritiveValue={nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          {errors.isNutritiveValue && <span> {this.messages.nutritiveValue} </span>}
        </div>
        <div>
          <Typography variant='subtitle1'>Dodaj link do zdjęcia:</Typography>
          <PhotoOfRecipe
            photo={photo}
            onInputChangeHandler={this.onInputChangeHandler('photo')}
          />
          {errors.isURLCorrect && <span>{this.messages.photo}</span>}
        </div>
        <div>
          <Label
            label={label}
            handleChange={this.onInputChangeHandler('label')}
          />
          <Button onClick={this.onSendData}>ZAPISZ</Button>
          {errors.isTitle
            && errors.isDescription
            && errors.areIngredients
            && errors.isNutritiveValue
            && errors.isURLCorrect}
        </div>
      </Paper >
    )
  }
}

export default AddRecipeContainer

