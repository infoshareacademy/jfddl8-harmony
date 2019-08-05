import React from "react";

import TextField from "@material-ui/core/TextField";

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
    </div>
  );

}

export default SearchForm;
