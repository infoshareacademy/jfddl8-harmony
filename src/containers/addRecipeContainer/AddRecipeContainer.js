import React from 'react'

import TitleOfRecipe from './title-of-recipe/TitleOfRecipe'
import Ingredients from './ingredients/Ingredients'
import Description from './description/Description'
import NutritiveValue from './nutritive-value/NutritiveValue'
import PhotoOfRecipe from './photo/PhotoOfRecipe'
import Label from './label/Label'

import Button from '../../components/button'
import Paper from '@material-ui/core/Paper'

import { addRecipeToFireBase } from './recipesService'

const styles = {
  paper: {
    margin: 12,
    padding: 50
  },
  header: {
    margin: '0 auto',
    padding:0,
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

  // reset() {nextParam
  //   this.senextParamtState(initialState)

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
    const { recipeState={} } = this.state

    return (
      <Paper style={styles.paper}>
        <div className="addRecipeContainer">
          <h1 style={styles.header}
          >Dodaj swój przepis</h1>
          <br />
          <TitleOfRecipe
            title={recipeState.title}
            onInputChangeHandler={this.onInputChangeHandler('title')}
          />
          <h5>Wpisz tytuł przepisu</h5>
        </div>
        <div>
          <Ingredients
            ingredients={recipeState.ingredients}
            onInputChangeHandler={this.onInputChangeHandler('ingredients')}
          />
          <h5>Składniki</h5>
        </div>
        <Description
          description={recipeState.description}
          onInputChangeHandler={this.onInputChangeHandler('description')}
        />
        <h5>Przygotowanie</h5>
        <div>
          <NutritiveValue
            nutritiveValue={recipeState.nutritiveValue}
            onInputChangeHandler={this.onInputChangeHandler('nutritiveValue')}
          />
          <h5>Wartość energetyczna</h5>
        </div>
        <div>
          <PhotoOfRecipe
            photo={recipeState.photo}
            onInputChangeHandler={this.onInputChangeHandler('photo')}
          />
          <h5>Dodaj link do zdjęcia</h5>
        </div>
        <div>
          <Label
            label={recipeState.label}
            handleChange={this.onInputChangeHandler('label')} />
        </div>
        <div>
          <Button onClick={this.onSendData}>ZAPISZ</Button>
        </div>
      </Paper>
    )
  }
}

export default AddRecipeContainer

