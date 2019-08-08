import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'


const SearchRangeSlider = (props) => {

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        Kalorie
      </Typography>
      <Slider
        onChangeCommitted={props.onSliderChange}
        valueLabelDisplay="auto"
        max={1000}
        min={0}
        style={{width: 300}}
      />
    </div>
  );
}

SearchRangeSlider.propTypes = {
  value: PropTypes.array,
  valueText: PropTypes.func,
  handleChange: PropTypes.func
}

SearchRangeSlider.defaultProps = {
  value: [100,900],
  valueText: () => {},
  handleChange: () => {}
}

 export default SearchRangeSlider