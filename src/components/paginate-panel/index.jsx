import React from "react";
import ReactPaginate from "react-paginate";
import ItemsList from "../items-list";

class PaginatedList extends React.Component {
  state = {
    pageLength: 9,
    initialPage:1
  };


  render() {

    const recipesDivide = () => {
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
    
    
    // console.log(paginationLength)
    // console.log(this.props.refersh)


    return(
      <div>
        <ItemsList refresh={this.props.refersh} recipes={this.props.recipes} />
        {/* <ReactPaginate 
        pageCount={paginationLength}
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
        initialPage={this.state.initialPage}/> */}
      </div>
    );
  }
}

export default PaginatedList;

