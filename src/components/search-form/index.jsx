import React from "react";

import SearchRangeSlider from "./search-range-slider";
import SearchInput from "./search-input";
import LabelSelect from "./label-select";
import { Button } from "@material-ui/core";

const SearchForm = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: 2 + "vh"
      }}
    >
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
      <Button
        style={{
          height: 3 + "em",
          alignSelf: "center"
        }}
        size="small"
        variant="contained"
        color="secondary"
        onClick={props.onButtonClick}
      >
        Favorites
      </Button>
    </div>
  );
};

export default SearchForm;
