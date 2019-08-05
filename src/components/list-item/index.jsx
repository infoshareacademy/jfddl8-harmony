import React from 'react'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info';

const ListItem = (props) => (
  <div>
    <GridListTile>
      <img src={'http://lorempixel.com/400/200'} alt={"http://lorempixel.com/400/200"} />
      <GridListTileBar
        title={'jakis tytuł'}
        subtitle={<span>by: Adam</span>}
        actionIcon={
          <IconButton>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  </div>
)

export default ListItem