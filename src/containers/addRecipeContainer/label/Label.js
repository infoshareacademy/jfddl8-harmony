import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'



const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(5),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
}))

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [label, setLabel] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setLabel(event.target.value)
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Rodzaj posiłku</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={label}
          onChange={handleChange}
          inputProps={{
            name: 'label',
          }}
        >
          <MenuItem value="">
            <em>Brak klasyfikacji</em>
          </MenuItem>
          <MenuItem value={'śniadanie'}>śniadanie</MenuItem>
          <MenuItem value={'lunch'}>lunch</MenuItem>
          <MenuItem value={'kolacja'}>kolacja</MenuItem>
          <MenuItem value={'deser'}>deser</MenuItem>
          <MenuItem value={'przekąska'}>przekąska</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}


