import React from 'react'



class AddRecipeContainer extends React.Component {
  state = {
    title: '',
    ingredients: '',
    description: '',
    nutritiveValue: '',

  }
  onInputChangeHandler = (property) => (event) =>{
    const newState = {}
    newState[property] = event.target.value

    this.setState(newState)
  }

  onSaveClicker = (props) => {
    const newRecipe = this.state
    const newRecipeString = JSON.stringify(newRecipe)
    localStorage.setItem('recipe', newRecipeString)
  }
  
  render() {
    return (
      <div>
        <h1>Dodaj swój przepis</h1>

        <h3>Wpisz tytuł przepisu</h3>
       
        <input
          type={'text'}
          value={this.state.name}
          onChange={this.onInputChangeHandler('name')}
        />

        <br />

        <h3>Składniki</h3>
        <input
          type={'text'}
          value={this.state.ingredients}
          onChange={this.onInputChangeHandler('ingredients')}
        />

        <br />

        <h3>Przygotowanie</h3>
        <input
          type={'text'}
          value={this.state.description}
          onChange={this.onInputChangeHandler('description')}
        />

        <br />

        <h3>Wartość energetyczna</h3>
        <input
          type={'text'}
          value={this.state.nutritiveValue}
          onChange={this.onInputChangeHandler('nutritiveValue')}
        />

        <br />
        <button
        onClick={this.onSaveClicker}
        >Zapisz</button>
      </div>
    )
  }
}

export default AddRecipeContainer

