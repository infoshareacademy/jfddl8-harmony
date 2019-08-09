import React from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

const LabelSelect = (props) => (
  <FormControl>
    <InputLabel>Kategoria posiłku</InputLabel>
    <NativeSelect
      value={props.selectValue}
      onChange={props.onSelectChange}
    >
      <option value="" />
      <option value={'breakfast'}>Śniadanie</option>
      <option value={'dinner'}>Obiad</option>
      <option value={'supper'}>Kolacja</option>
      <option value={'dessert'}>Deser</option>
      <option value={'snack'}>Przekąska</option>
    </NativeSelect>
    <FormHelperText>Jaki posiłek Cię interesuje?</FormHelperText>
  </FormControl>
)

export default LabelSelect