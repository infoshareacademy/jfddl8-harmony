import React from "react"

import SearchRangeSlider from './search-range-slider'
import TextField from "@material-ui/core/TextField"
import LabelSelect from './label-select'


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
      <LabelSelect />
      <SearchRangeSlider />
    </div>
  )

}

export default SearchForm;
