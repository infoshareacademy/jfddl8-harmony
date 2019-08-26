import React from "react";
import ItemsList from "../ItemsList";
import PaginationPanel from "../PaginationPanel";

const styles = {
  div: {
    display: 'block',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
class PaginatedList extends React.Component {
  state = {
    pageLength: 9,
    currentPage: 0,
    initialPage: 0
  };

  changeRecipesPage = num => {
    this.setState({ currentPage: num })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  recipesDivide = (recipes) => {
    let recipesToShow = [];
    let arr = [];
    recipes.forEach((el, index) => {
      arr.push(el);
      if (
        arr.length === this.state.pageLength ||
        index === recipes.length - 1
      ) {
        recipesToShow.push(arr);
        arr = [];
      }
    });

    return {
      recipesToShow,
      paginationLength: Math.ceil(this.props.recipes.length / this.state.pageLength)
    };
  };

  render() {
    const recipesDivided = (this.recipesDivide(this.props.recipes))
    const recipesToShow = recipesDivided.recipesToShow
    const paginationLength = recipesDivided.paginationLength
    const currentPage = paginationLength - 1 < this.state.currentPage ? 0 : this.state.currentPage

    return (
      <div style={styles.div}>
        <ItemsList refresh={this.props.refresh} recipes={recipesToShow[currentPage]} />
        <PaginationPanel paginationLength={paginationLength} currentPage={currentPage} changePage={this.changeRecipesPage}/>
      </div>
    );
  }
}

export default PaginatedList;

