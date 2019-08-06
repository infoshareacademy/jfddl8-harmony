import React from "react"
import ItemsList from "../../components/items-list"
import SearchForm from "../../components/search-form"

class ListContainer extends React.Component {
  state = {
    recipe: {},
    searchPhrase: '',
    items: [{}]
  };

  filterHandler = (event) => (
    this.setState({
      searchPhrase: event.target.value
    })
  )
  
  // componentDidMount() {
  //   fetch('https://randomuser.me/api?results=10')
  //     .then(result => result.json())
  //     .then(users => {
  //       this.setState({
  //         users: users.results
  //       })
  //     })
  // }

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
