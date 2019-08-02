import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}

const SideBarItem = (props) => (
  <Link
    to={props.to}
    style={styles.link}
  >
    <ListItem button={true}>
      <ListItemText
        primary={props.label}
      />
    </ListItem>
  </Link>
)

export default SideBarItem 