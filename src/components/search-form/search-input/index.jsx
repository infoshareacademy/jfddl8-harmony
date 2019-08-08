import React from "react"

import TextField from "@material-ui/core/TextField"



const SearchInput = (props) => (
  <TextField
        label="Szukaj"
        multiline
        value={props.searchPhrase}
        onChange={props.onInputChange}
        margin="dense"
      />
)

export default SearchInput