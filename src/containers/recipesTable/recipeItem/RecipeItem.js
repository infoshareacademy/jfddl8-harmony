import React from 'react'

import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const RecipeItem = (props) => (
  <MuiListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar
        alt={props.title}
        src={props.photo}
      />
    </ListItemAvatar>
    <ListItemText
      primary={props.label}
      secondary={props.description}
    />
  </MuiListItem>
)

export default RecipeItem


