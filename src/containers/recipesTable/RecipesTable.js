import React from 'react'


class RecipesTable extends React.Component {
  state = {
    recipes : null
  }
  componentDidMount(){
    fetch('https://jfddl8-harmonylublin.firebaseio.com/')
    .then(r => r.json())
    .then(data =>{
      this.setState({
        recipes: data.results
      })
    })
    
  }
  render(){
    const items = this.state.recipes && this.state.recipes.map(
      recipe => ({
        key: recipe.key,
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients,
        label: recipe.label,
        photo:recipe.photo

      })
    )
    return(
      <div>
      items={items}
      </div>
    
    )
  }

}
export default RecipesTable