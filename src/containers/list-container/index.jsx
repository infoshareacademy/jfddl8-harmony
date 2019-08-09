import React from "react"
import ItemsList from "../../components/items-list"
import SearchForm from "../../components/search-form"

class ListContainer extends React.Component {
  state = {
    recipes: [],
    label: '',
    searchPhrase: '',
    sliderValue: 1000,
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

  inputHandler = (event) => (
    this.setState({
      searchPhrase: event.target.value
    })
  )

  labelHandler = (event) => (
    this.setState({
      label: event.target.value
    })
  )

  sliderHandler = (event, value) => (
    this.setState({
      sliderValue: value
    })
  )

  componentDidMount() {
    this.loadElements()
  }

  loadElements = () => {
    fetch('https://jfddl8-harmonylublin.firebaseio.com/recipes.json')
      .then(result => result.json())
      .then((data) => (
        this.setState({
          recipes: this.mapObjectToArray(data)
        })
      ))
  }

  render() {
    const showedList = this.state.recipes.filter(({ title = '', label = '', nutritiveValue = 0 }) => {
      

      const searchPhrase = this.state.searchPhrase.toLowerCase()
      const includeTextFilter = title
        .toLowerCase()
        .includes(searchPhrase)

      const selectedLabel = this.state.label
      const includeLabel = label.includes(selectedLabel)

      const sliderValue = this.state.sliderValue
      const includeSliderValue = nutritiveValue <= sliderValue

      return includeTextFilter && includeLabel && includeSliderValue
    })

    return (
      <div>
        <SearchForm
          searchPhrase={this.state.searchPhrase}
          sliderValue={this.state.sliderValue}
          selectValue={this.state.label}
          onInputChange={this.inputHandler}
          onSelectChange={this.labelHandler}
          onSliderChange={this.sliderHandler}
        />
        <ItemsList
          recipes={showedList}
          refresh={this.loadElements}
        />
      </div>
    );
  }

}

export default ListContainer;
