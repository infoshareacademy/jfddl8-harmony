import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <h1>SEARCH FORM HERE</h1>
        <TextField
          label="Szukaj"
          fullWidth
          multiline
          rows="4"
          defaultValue="Czego szukasz?"
          margin="dense"
        />
        <Button variant="contained" color="primary">
          Szukaj
        </Button>
      </div>
    );
  }
}

export default SearchForm;
