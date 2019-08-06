import React from "react"
import ItemsList from "../../components/items-list"
import SearchForm from "../../components/search-form"

class ListContainer extends React.Component {
  state = {
    recipe: {},
    searchPhrase: '',
    items: [{}]
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
      .then((data) => console.log(this.mapObjectToArray(data)))
  }

  render() {

    return (
      <div>
        <SearchForm
          searchPhrase={this.state.searchPhrase}
          onChange={this.filterHandler}
        />
        <ItemsList />
      </div>
    );
  }

}

export default ListContainer;
