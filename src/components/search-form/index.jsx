import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <p>Wyszukiwanie</p>
        <TextField
          label="Szukaj"
          multiline
          defaultValue="Czego szukasz?"
          margin="dense"
        />
        <br />
        <Button variant="contained" color="primary">
          Szukaj
        </Button>
      </div>
    );
  }
}

export default SearchForm;
