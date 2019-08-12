import React from "react";

import SearchRangeSlider from "./search-range-slider";
import SearchInput from "./search-input";
import LabelSelect from "./label-select";
import { ButtonGroup, Button } from "@material-ui/core";

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
      <ButtonGroup
        style={{
          height: 2 + "em",
          alignSelf: "center"
        }}
        variant="contained"
        size="small"
        aria-label="small contained button group"
      >
        <Button onClick={props.onButtonClick}>Wszystkie przepisy</Button>
        <Button 
        onClick={props.onButtonClick}
        color={'secondary'}
        >Ulubione przepisy</Button>
      </ButtonGroup>

      {/* <Button
        style={{
          height: 3 + "em",
          alignSelf: "center"
        }}
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => props.onButtonClick}
      >
        Favorites
      </Button> */}
    </div>
  );
};

export default SearchForm;
