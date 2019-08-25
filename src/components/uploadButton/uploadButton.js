import React from 'react'
import { Button } from '@material-ui/core'

const styles = {
  input: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '1',
    cursor: 'pointer',
    opacity: 0

  },
  label: {
    fontSize: '1em',
    fontWeight: '700',
    color: 'white',
    display: 'inline-block',
    cursor: 'pointer'
  }
}

const UploadButton = props => {
  return (
    <div>
      <div>
        <label style={styles.label} htmlFor="file">
          <Button variant={'contained'} color={'default'}>
            <input type="file" name="file" id="file" style={styles.input} onChange={props.onImageChange} />
            WYBIERZ SWOJE ZDJĘCIE
          </Button>
        </label>
      </div>
    </div>
  )
}

export default UploadButton