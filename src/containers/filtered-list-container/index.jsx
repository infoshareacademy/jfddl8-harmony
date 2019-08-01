import React from "react"
import FilteredList from "../../components/filtered-list"
import SearchForm from "../../components/search-form"

class FilteredListContainer extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
        <SearchForm />
        <FilteredList />
      </div>
    );
  }

}

export default FilteredListContainer;
