import React from "react"

import SearchRangeSlider from './search-range-slider'
import SearchInput from './search-input'
import LabelSelect from './label-select'


const SearchForm = (props) => {

  return (
    <div>
      <SearchInput 
      searchPhrase={props.searchPhrase}
      onInputChange={props.onInputChange}
      />
      <LabelSelect 
      onSelectChange={props.onSelectChange}
      />
      <SearchRangeSlider 
      onSliderChange={props.onSliderChange}
      />
    </div>
  )

}

export default SearchForm;
