import React from "react";

import SearchForm from "../../components/SearchForm";
import PaginatedList from "../../components/PaginatedList";
// import { checkIfUserIsLoggedInAsyncActionCreator } from "../../state/auth";

class Recipes extends React.Component {
  state = {
    recipes: [],
    label: "",
    searchPhrase: "",
    sliderValue: 1000,
    showFavorite: false,
    filterFavorite: false,
    pageLength: 9
  };

  mapObjectToArray = obj =>
    Object.entries(obj || {}).map(([key, value]) =>
      typeof value === "object" ? { ...value, key } : { key, value }
    );

  inputHandler = event =>
    this.setState({
      searchPhrase: event.target.value
    });

  labelHandler = event =>
    this.setState({
      label: event.target.value
    });

  favoriteButtonHandler = event => {
    this.setState({
      filterFavorite: !this.state.filterFavorite,
      showFavorite: !this.state.showFavorite
    });
  };

  sliderHandler = (event, value) =>
    this.setState({
      sliderValue: value
    });

  componentDidMount() {
    this.loadElements();
  }

  loadElements = () => {
    fetch("https://jfddl8-harmonylublin.firebaseio.com/recipes.json")
      .then(result => result.json())
      .then(data =>
        this.setState({
          recipes: this.mapObjectToArray(data)
        })
      )
      .catch(() => this.setState({
        recipes: []
      })
      )
  };

  render() {
    
    const showedList = this.state.recipes.filter((recipe, i, arr) => {
      const {
        title = "",
        label = "",
        nutritiveValue = 0,
        isFavorite = false
      } = recipe;
      const searchPhrase = this.state.searchPhrase.toLowerCase();
      const includeTextFilter = title.toLowerCase().includes(searchPhrase);

      const selectedLabel = this.state.label;
      const includeLabel = label.includes(selectedLabel);

      const sliderValue = this.state.sliderValue;
      const includeSliderValue = nutritiveValue <= sliderValue;

      const isItFavorite =
        !this.state.filterFavorite || isFavorite === this.state.showFavorite;

      return (
        includeTextFilter && includeLabel && includeSliderValue && isItFavorite
      );
    });

    return (
      <div>
        <SearchForm
          searchPhrase={this.state.searchPhrase}
          sliderValue={this.state.sliderValue}
          selectValue={this.state.label}
          onInputChange={this.inputHandler}
          onSelectChange={this.labelHandler}
          onSliderChange={this.sliderHandler}
          onButtonClick={this.favoriteButtonHandler}
        />
       { showedList.length > 0 ? <PaginatedList recipes={showedList} refresh={this.loadElements} /> : null}
      </div>
    );
  }
}

export default Recipes;
