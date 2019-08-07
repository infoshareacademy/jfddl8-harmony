import React from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

const LabelSelect = (props) => {


  return (
    <div>
       <FormControl>
        <InputLabel>Kategoria posiłku</InputLabel>
        <NativeSelect
          value={props.type}
          onChange={props.handleChange}
          input={<Input name="age" id="age-native-helper" />}
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
    </div>
  )

}

export default LabelSelect