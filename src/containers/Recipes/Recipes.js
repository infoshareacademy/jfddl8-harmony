import React from "react";
import { connect } from 'react-redux'


import SearchForm from "../../components/SearchForm";
import PaginatedList from "../../components/PaginatedList";
import { loadElementsAsyncActionCreator } from "../../state/recipes";
// import { refreshTokenAsyncActionCreator } from "../../state/auth";

class Recipes extends React.Component {
  state = {
    label: "",
    searchPhrase: "",
    sliderValue: 1000,
    showFavorite: false,
    filterFavorite: false,
    pageLength: 9
  };

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
    this.props._loadElements()
  }


  render() {
    
    const showedList = this.props._recipes.filter((recipe, i, arr) => {
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
        {showedList.length > 0 ? <PaginatedList recipes={showedList} refresh={this.props._loadElements} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state =>({
    _recipes: state.recipes.recipes || []
}) 

const mapDispatchToProps = dispatch => ({
  _loadElements: () => dispatch(loadElementsAsyncActionCreator()),
  // _check: () => dispatch(refreshTokenAsyncActionCreator())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes)
