import React from 'react'


class AddRecipeContainer extends React.Component {
  state = {
    title: '',
    ingredients: '',
    description: '',
    nutritiveValue: '',

  }

  onTitleOfRecipeChangeHandler = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  onIngredientsChangeHandler = (event) => {
    this.setState({
      ingredients: event.target.value
    })
  }

  onDescriptionChangeHandler = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  onNutritiveValueChangeHandler = (event) => {
      this.setState({
        nutritiveValue: event.target.value
      })
    }
  
  render() {
    return (
      <div>
        <h1>Dodaj swój przepis</h1>

        <h3>Wpisz tytuł przepisu</h3>
        <input
          type={'text'}
          value={this.state.name}
          onChange={this.onTitleOfRecipeChangeHandler}
        />

        <br />

        <h3>Składniki</h3>
        <input
          type={'text'}
          value={this.state.ingredients}
          onChange={this.onIngredientsChangeHandler}
        />

        <br />

        <h3>Przygotowanie</h3>
        <input
          type={'text'}
          value={this.state.description}
          onChange={this.onDescriptionChangeHandler}
        />

        <br />

        <h3>Wartość energetyczna</h3>
        <input
          type={'text'}
          value={this.state.nutritiveValue}
          onChange={this.onNutritiveValueChangeHandler}
        />

        <br />
        <button>Zapisz</button>
      </div>
    )
  }
}

export default AddRecipeContainer

