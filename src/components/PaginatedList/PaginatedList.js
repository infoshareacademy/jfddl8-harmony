import React from "react";
import ItemsList from "../ItemsList";
import PaginationPanel from "../PaginationPanel";

const styles = {
  div: {
    display: 'flex',
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

  recipesDivide = () => {
    let recipesToShow = [];
    let arr = [];
    this.props.recipes.forEach((el, index) => {
      arr.push(el);
      if (
        arr.length === this.state.pageLength ||
        index === this.props.recipes.length - 1
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
    const recipesDivided = (this.recipesDivide())
    const recipesToShow = recipesDivided.recipesToShow
    const paginationLength = recipesDivided.paginationLength

    return (
      <div style={styles.div}>
        <ItemsList refresh={this.props.refresh} recipes={recipesToShow[this.state.currentPage]} />
        <PaginationPanel paginationLength={paginationLength} currentPage={this.state.currentPage} changePage={this.changeRecipesPage}/>
      </div>
    );
  }
}

export default PaginatedList;

