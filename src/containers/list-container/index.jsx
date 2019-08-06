import React from "react"
import ItemsList from "../../components/items-list"
import SearchForm from "../../components/search-form"

class ListContainer extends React.Component {
  state = {
    recipes: [],
    searchPhrase: '',
  };

  mapObjectToArray = (obj) => (
    Object.entries(obj || {})
      .map(([key, value]) => (
        typeof value === 'object' ?
          {...value, key}
          :
          {key, value}
      ))
  )

  filterHandler = (event) => (
    this.setState({
      searchPhrase: event.target.value
    })
  )
  
  componentDidMount() {
    fetch('https://jfddl8-harmonylublin.firebaseio.com/recipes.json')
      .then(result => result.json())
      .then((data) =>(
        this.setState({
          recipes: this.mapObjectToArray(data)
        })
      ))
  }

  render() {

    return (
      <div>
        <SearchForm
          searchPhrase={this.state.searchPhrase}
          onChange={this.filterHandler}
        />
        <ItemsList recipes={this.state.recipes}/>
      </div>
    );
  }

}

export default ListContainer;
