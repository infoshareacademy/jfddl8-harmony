import React from "react"

import SearchRangeSlider from './search-range-slider'
import TextField from "@material-ui/core/TextField"

const SearchForm = (props) => {

  return (
    <div>
      <TextField
        label="Szukaj"
        multiline
        value={props.searchPhrase}
        onChange={props.onChange}
        margin="dense"
      />
      <SearchRangeSlider />
    </div>
  )

}

export default SearchForm;
