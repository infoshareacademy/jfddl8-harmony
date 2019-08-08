import React from "react"
import ItemsList from "../../components/items-list"
import SearchForm from "../../components/search-form"

class ListContainer extends React.Component {
  state = {
    recipes: [],
    label: '',
    searchPhrase: '',
  };

  mapObjectToArray = (obj) => (
    Object.entries(obj || {})
      .map(([key, value]) => (
        typeof value === 'object' ?
          { ...value, key }
          :
          { key, value }
      ))
  )

  filterHandler = (event) => (
    this.setState({
      searchPhrase: event.target.value
    })
  )
  labelHandler = (event) =>(
    this.setState({
      label: event.target.value
    })
  )

  componentDidMount() {
    fetch('https://jfddl8-harmonylublin.firebaseio.com/recipes.json')
      .then(result => result.json())
      .then((data) => (
        this.setState({
          recipes: this.mapObjectToArray(data)
        })
      ))
  }

  render() {
    const inputFilter = this.state.recipes.filter((el) => {
      const searchPhrase = this.state.searchPhrase.toLocaleLowerCase()
      const filteredBySearchPhrase = el.title
        .toLowerCase()
        .includes(searchPhrase)

      return filteredBySearchPhrase
    })

    return (
      <div>
        <SearchForm
          searchPhrase={this.state.searchPhrase}
          onInputChange={this.filterHandler}
          onSelectChange={this.labelHandler}
        />
        <ItemsList recipes={inputFilter} />
      </div>
    );
  }

}

export default ListContainer;
