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
        selectValue={props.selectValue}
        onSelectChange={props.onSelectChange}
      />
      <SearchRangeSlider
        sliderValue={props.sliderValue}
        onSliderChange={props.onSliderChange}
      />
    </div>
  )

}

export default SearchForm;
