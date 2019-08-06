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
          <option value={10}>Śniadanie</option>
          <option value={20}>Obiad</option>
          <option value={30}>Kolacja</option>
          <option value={40}>Deser</option>
          <option value={50}>Przekąska</option>
        </NativeSelect>
        <FormHelperText>Jaki posiłek Cię interesuje?</FormHelperText>
      </FormControl>
    </div>
  )

}

export default LabelSelect