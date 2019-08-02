import React from 'react'


class AddRecipeContainer extends React.Component {
  state = {
    title: '',
    ingredients: '',
    description:'',
    nutritiveValue: '',

  }
  render() {
    return (
      <div>
        <h1>Dodaj swój przepis</h1>
        <h3>Wpisz tytuł przepisu</h3>
        <input type={'text'}/>
        <br />
        <h3>Składniki</h3>
        <input type={'text'}/>
        <br />
        <h3>Przygotowanie</h3>
        <input type={'text'}/>
        <h3>Wartość energetyczna</h3>
        <input type={'text'}/>
        <br />
        <button>Zapisz</button>
      </div>
    )
  }
}

export default AddRecipeContainer

