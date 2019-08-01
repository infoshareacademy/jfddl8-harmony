import React from 'react'
import { Link } from 'react-router-dom'
import { ListItemText, ListItem } from '@material-ui/core'

const styles = {
  link: {
    textDecoration: 'none',
    color: '#222'
  }
}

const SideBarItem = (props) => (
  <Link to={props.to}
  style={styles.link}>
    <ListItem button={true}>
      <ListItemText
        primary={props.label}
      />
    </ListItem>
  </Link>
)

export default SideBarItem